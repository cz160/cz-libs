# 竹合

- 个人博客分享
- 集成组件库、方法库、hooks 的一个多包项目
- npm 包名

```
博客地址： www.czhuangjia.top
组件库： @cz160/components
方法库： @cz160/utils
hooks库 @cz160/hooks
```

## 起步

- 安装多包依赖和相互依赖 link

```
yarn bootstrap
```

- 启动文档

```
 yarn start
```

## 目录说明

- packages：开发目录

```
hooks: 公共hooks目录
utils: 公共方法目录
components: 公共组件目录
```

## lerna 常规操作

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

## 开发流程

1. 以 master 最近版本拉出新分支

```
分支命名规范： feat/你的名字缩写/功能-时间（210517）
```

2. 进行开发
3. 进行 rebase master 分支后，提交 Pr - cz160
4. CodeReview
5. 合并分支到 master

## Q&A
