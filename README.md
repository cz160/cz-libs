# dumi

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

# lerna + yarn 的 monorepo 工作流

- 创建包
  lerna create 包名 -y
- 命令

```
用yarn来处理依赖问题，用lerna来处理发布问题
1. 给所有包安装依赖
lerna bootstrap
2.给某个包安装依赖
lerna add 依赖包 当前包名
3.多个包相互依赖(安装模块1给模块2)
lerna add module-1 --scope=module-2
lerna add module-1 --scope=module-2 --dev
lerna add module-1(给所有依赖模块一的包安装)
lerna add 包名(给所有包安装)
4.lerna bootstrap = yarn install(把所有依赖的包安装到根node_modules)
5.lerna list(列出所有包)
6.lerna clean(删除所有包的node_modules)
7.lerna changed(列出下次发版需要更新的包)
8.lerna publish （打tag,上传git,上传npm）
    如果你的包名是带scope的例如："name": "@gp0320/gpwebpack",
    "publishConfig": {
        "access": "public"
    },
```
