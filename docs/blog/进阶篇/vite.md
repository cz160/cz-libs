---
order: 0
---

# vite 原理分析

## 什么是 vite?

vite 是一个基于浏览器原生 ES Modules 的开发服务器，它做到了本地快速启动、实现按需编译、不需要等待整个应用编译完成的作用。

## Es Modules

浏览器支持的一种模块化方案，允许在代码中使用模块化，并且浏览器可以直接解析

- 使用方式

```js
index.js
    import testModule from './testModules'
index.html
   <script type="module" src="./testModule.js"></script>
当浏览器解析到import testModule from './testModules'，会往当前域名发送一个请求获取对应的资源
[更多访问](https://es6.ruanyifeng.com/#docs/module)
```

## vite 对比 webpack 快在哪里?

### webpack

使用 webpack 进行打包时,当产生代码变更，webpack 需要重新打包，因为 webpack 需要将所有模块打包成一个或者多个 chunk

- 例子

```js
// name.js
export const name = 'cz';
// age.js
export const age = 22;
// main.js
imprrt { name } from 'name.js';
imprrt { age } from 'age.js';
export const getInfo(){
    return `姓名：${name}，年纪:${age}`
}
// bundle.js
const name = 'cz';
const age = 22;
const getInfo = () => {
     return `姓名：${name}，年纪:${age}`
}
export { getInfo };
当修改age.js时，整个bundle需要重新打包，随着我们项目体积逐渐扩大，热更新的时间越来越长,所以我们是不是可以通过跳过打包的过程来提升速度呢？
```

### vite 基本实现原理

启用一个服务拦截拦截浏览器请求 ES Module 的请求，通过路径找到对应的文件进行处理，最终以 Es modules 格式返回给浏览器。

#### node_modules 模块的处理

```
vite将所有的代码视为原声生es模块，当我们在项目中引入三方模块(可能为commonjs模块和UMD 格式)浏览器直接以相对地址寻找该模块代码(无法找到)
```

- 依赖预构建处理

```
vite将分析package.json 中的 dependencies 列表，将依赖包处理成Es modules格式，并缓存到node_modules中的.vite中，方便浏览器获取资源
```

#### 热更新

Vite 的热加载原理，其实就是在客户端与服务端建立了一个 websocket 链接，当代码被修改时，服务端发送消息通知客户端去请求修改模块的代码，完成热更新。

- 服务端

```
服务端做的就是监听代码文件的改变，在合适的时机向客户端发送 websocket 信息通知客户端去请求新的模块代码。
```

- 客户端

```
起了一个websocket，并对websocket相关的信息进行处理
// 对代码更新进行处理
js-update
以link标签引入的css文件
html相关的文件变化的时候直接location.reload()
```

### vite 源码解析

#### vite dev

##### cli.ts

```js
// 创建服务开启监听
const { createServer } = await import('./server');
const server = await createServer({
  root,
  base: options.base,
  mode: options.mode,
  configFile: options.config,
  logLevel: options.logLevel,
  clearScreen: options.clearScreen,
  server: cleanOptions(options),
});
await server.listen();
```

##### createServer(/node/server/index.ts)

- 整合配置文件 vite.config.js 和 命令行里的配置到 config 中

```
const config = await resolveConfig(inlineConfig, "serve", "development");
```

- 启动一个 http(s)server,并升级为 websocket

```js
const httpsOptions = await resolveHttpsConfig(config);
const middlewares = connect() as Connect.Server;
const httpServer = middlewareMode ? null : await resolveHttpServer(serverConfig, middlewares, httpsOptions);
const ws = createWebSocketServer(httpServer, config, httpsOptions);
```

- 使用 chokidar 监听文件变化

```js
const watcher = chokidar.watch(path.resolve(root), {
    ignored: [
      '**/node_modules/**',
      '**/.git/**',
      ...(Array.isArray(ignored) ? ignored : [ignored])
    ],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    disableGlobbing: true,
    ...watchOptions
}) as FSWatcher
```

- 将所有的 plugin 统一进行处理，保存到 container 中

```js
const container = await createPluginContainer(config, watcher);
```

- 生成 moduleGraph(vite 中的解释是 moduleGraph 用于记录 import 的关系、url 到 file 的映射及热更新相关)
- 初始化后面要返回的 server,绑定了一些属性和方法

```js
const server: ViteDevServer = {
    ...
}
```

- watcher 发生变化的时候，进行相应的热更新处理

```js
watcher.on('change', fn);
watcher.on('add', fn);
watcher.on('unlink', fn);
```

- 执行 vite 钩子 configureServer,这里 postHooks 只收集有 configureServer 的 plugin

```js
const postHooks: ((() => void) | void)[] = [];
for (const plugin of plugins) {
  if (plugin.configureServer) {
    postHooks.push(await plugin.configureServer(server));
  }
}
```

- 内部中间件的使用
- 执行 posHooks 里的 plugins
- 转换 index.html
- 监听之前执行 vite 钩子 buildStart，进行依赖预构建

```js
if (!middlewareMode && httpServer) {
    let isOptimized = false
    // overwrite listen to run optimizer before server start
    const listen = httpServer.listen.bind(httpServer)
    httpServer.listen = (async (port: number, ...args: any[]) => {
      if (!isOptimized) {
        try {
          await container.buildStart({})
          // 执行预构建
          await runOptimize()
          isOptimized = true
        } catch (e) {
          httpServer.emit('error', e)
          return
        }
      }
      return listen(port, ...args)
    }) as any
  } else {
    await container.buildStart({})
    await runOptimize()
  }
```

- 返回 server
