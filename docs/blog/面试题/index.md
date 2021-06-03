## 基础篇

### 语义化

#### 什么是 HTML 语义化

就是为了使内容语义化,去选择合适的标签，以便于开发者阅读和写出更优雅的代码，同时让浏览器的爬虫和机器很好的解析

#### 为什么要语义化

- 有利于 SEO(搜索引擎优化)：和搜索引擎建立良好的沟通，有助于爬虫抓取更多的信息；爬虫依赖于标签来确定上下文和各关键字的权重
- 便于团队开发和维护，语义化更具有可读性

#### 语义化标签有哪些？

(没有 CSS 的情况下，HTML 页面也能呈现出很好地内容结构、代码结构)

- header footer nav
- article:装载显示一个独立文章的内容
- section:定义文档中的区域
- adide:用来装载非正文类的内容

---

### 布局方式

#### 固定布局：一般 pc 端应用，根据设计图的尺寸直接设置

#### 流式布局(自适应布局)：根据设备的尺寸来调整内容的宽度

```
    一般使用手淘团队的flexible进行rem设置
    原理：根据dpr来调整viewport，然后将根元素的fontSize设置为视口宽度的1/10
    举个例子：假设设计图有一个元素=75px
              viewport = 750
              rem = 750/10=75
              那么该元素 = 1rem
```

#### 响应式布局：根据设备尺寸的不同来调整内容的比例

```
    (1)阀值：表示几个屏幕大小的过度值
    (2)特点：一般只考虑宽度
    (3)媒体查询
        语法：@media screen and (min-width:992px){

        }
        screen代表彩色屏幕，all表示所有屏幕，and后面加判断条件
    (4)规则
        屏幕优先：对移动端友好
        对移动端不用加载后面的样式，渲染效率高，pc端处理块，可以使其写3个进行覆盖
```

---

#### viewport(视口)

- 页面不是直接放在浏览器中的，而是先放在 viewport 中，在将 viewport 按照比例缩放到浏览器

---

#### 单位

- %：相对于父元素大小设置的比例
- vw:视窗宽度的百分比(1vw=视窗宽度的 1%)
- vh:视窗高度
- rem: html 的 fontSize
-

### 弹性盒局部

- 作用：解决元素的排列问题
- 特点：弹性盒模型属于一个新的体系，当父元素编程一个弹性盒子，子元素为弹性子元素
- 定义：display:flex

---

#### Es5

- 严格模式("use strict 加在前面")

```
    (1)不加var报错 with/callee
    (2)函数调用时不指向window
```

- 作用域和作用域链

```
    (1)局部变量都保存在一个作用域对象中
    (2)当前作用域没有，往上层作用域找
    (3)几个作用域对象存在一个链条关系-》作用域链
```

- Object.keys:取出对象中的名字返回一个数组
- Object.value:取出对象中的值返回一个数组
- var b = Object.create(a)以 a 的原型创建出一个对象 b
- Object.defineProperty

```js
    Object.defineProperty(obj,key,{
        writable:true //属性是否可修改
        enumerable:ture //属性是否可遍历
        configurable: ture //属性是否可删除
        get:()=>{
            return val
            //当前属性只能通过get函数得到返回值
        }
        set:(val)=>{
            obj[key]=val
            //改变视图的方法
            this[this.watcher[key]]()
        }
    })
```

- map(映射)

```js
function map(arr, fn) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp.push(fn(arr[i]));
  }
  return temp;
}
```

- fliter

```js
function filter(arr, fn) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    var res = fn(arr[i]);
    if (res) temp.push(arr[i]);
  }
  return temp;
}
```

- some(有一个满足条件就返回 true)

```js
    function some(arr,fn){
        for(var =0;i<arr.length;i++){
            if(fn(arr[i])return true
        }
        return false
    }
```

- reduce

```js
function reduce(arr, fn) {
  var res = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    res = fn(res, arr[i + 1]);
  }
  return res;
}
```

- bind 原理

```js
    function bind(target,fn){
        //给当前对象身上加一个属性=需要调用的方法
        target.method = fn
        return funtion(){
            //返回一个函数，执行这个函数就是执行你传入的函数
            target.method()
        }
    }
```

---

#### Es6

- let 关键字：遇到{}就会形成一个块级作用域
- const:定义常量
- 箭头函数：()=>{} 特点：不能 new 不会改变 this 指向
- 解构赋值：let [a,b,c] =[1,2,3]
- object.assign:合并对象(浅拷贝)
- set/map 集合(元素不重复)

```
    Set
        (1)类似数组，元素不重复(通过add方法向其加入元素)
        (2)向Set加入值时不会发生类型转换
        (3)两个对象总是不相等的
        (4)遍历操作(for...of)
        (5)键名和值名相同
    Map
        (1)本质上是键值对的集合，键的范围不限于字符串
        (2)类似对象(值-值):一种更完善的Hash结构
        (3)Map的键实际上是和内存地址绑定的，只要内存地址不一样就视为两个键

```

- 拓展运算符(...)
- Promise

```
    异步编程的一种解决方案
    所谓Promise,简单来说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果
    new Promise((resolve,reject)=>{
        resolve()
    }).then(result=>console.log(result))
      .catch(error=>console.log('error'))

    const p = Promise.all([p1,p2,p3])
        (1)只有p1、p2、p3的状态都为fulfilled，p的状态才
        会变成fulfilled,此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
        (2)只要p1、p2、p3中有一个被reject，p的状态就会被reject，此时第一被reject的返回值，会传递给p的回调函数
```

- Object.defineProperty 和 proxy

```
    相同点：都有数组劫持的效果，当访问或者修改对象的某
    个属性时，他们回去劫持这个行为。对属性进行操作或者修改
    Object.defineProperty：
        (1)无法监听数组的变化
        (2)需要遍历对象的每个属性
        (3)必须深层遍历嵌套的对象
    proxy:
        (1)可以监听数组的变化
        (2)不需要遍历对象的每个属性，可以监听整个数组
        (3)不支持嵌套监听，在get中递归调用proxy
        (4)Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改。
```

- 实现一个简单的发布订阅

```
    let event = {
        clientList:{},
        listen:function(key,fn){
            if(!this.clientList[key]){
                this.clientList[key]=[]
            }
            this.clientList[key].push(fn)
        }
        trigger:function(type,params){
            let fns = this.clientList[type]
            if(!fns || fns.length===0){
                return false
            }
            fns.foreach(item=>{
                item.call(this,params)
            })
        }
    }
```

- 实现一个深拷贝？

```
    function DeepCopy(arr){
        let obj = arr instanceof Array?[]:{}
        for(var i in arr){
            //判断每一个元素是不是一个数组或者对象
            if(typeof arr[i]==="object"){
                //递归
                obj[i]=DeepCopy(arr[i])
            }else{
                obj[i]=arr[i]
            }
        }
    }
```

- 实现 new

```
    function create(){
        //创建一个新对象
        var obj = new Object()
        //获得构造函数
        var Con = [].shift.call(arguments)
        //链接原型
        obj.__proto__ = Con.prototype
        //绑定this
        Con.apply(obj,arguments)
        //返回
        return obj
    }
```

- 实现 instanceof

```
    function Instanceof(left,right){
        //获取原型类型
        let prototype = right.prototype
        //获取对象类型
        left = left.__proto__
        //判断对象类型是否和原型类型相同
        while(true){
            if(left===null)
                return false
            if(left===prototype)
                return true
            left = left.__proto__
        }
    }
```

- 实现 call

```
    思路：给新对象添加一个函数，执行后删除
    Function.prototype.mycall = function(context){
        var context = context || window
        //获得到context后面的参数
        var args = [...arguments].slice(1)
        context.fn = this
        var result = context.fn(...args)
        //删除fn
        delete context.fn
        return result
    }
```

- 实现 apply

```
    Function.prototype.myapply = function(context){
        var context = context || window
        context.fn = this
        var result
        if(argument[1]){
            result = context.fn(...arguments)
        }else{
            result = context.fn()
        }
        delete context.fn
        return result
    }
```

- Event Loop

```
    1.执行同步代码，属于宏任务
    2.执行栈为空时，查询是否有微任务需要执行
    3.执行所有微任务
    4.  然后开始下一轮Event Loop,执行宏任务中的异步代码
```

## 浏览器复习

- Service Worker

```
    本质上充当web应用程序和浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，它们使能够创建有限的离线缓存，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上采用适当的动作
    该技术通常用来做缓存文件，提高首屏速度
```

- 渲染机制

```
    步骤：
        (1)处理html并构建DOM树
        (2)处理CSS构建CSSOM树
        (3)将DOM树和CSSOM合并成一个渲染树
        (4)根据渲染树来布局，计算每个节点的位置
        (5)调用GPU绘制，合成图像，显示在屏幕上
```

```
    在构建CSSOM树时，会阻塞渲染，直到CSSOM构建完成，并且CSSOM树是一个十分消耗性能的过程，所以应该尽量保证层级扁平化

    当html解析到script时，会暂停构建DOM，完成后才会从暂停的位置重新开始，也就是说你想首屏渲染的越快，就越不应该在首屏加载Js文件
```

- 重绘与回流

```
    重绘：当节点需要更改外观而不影响布局  例：改变color
    回流：布局或几何属性需要改变
    回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多

    减少重绘和回流
        (1)使用translate替代top
        (2)使用visibility替换display:none
```

## 性能

### 网络相关

- DNS 预解析：DNS 解析是需要时间的，可以通过预解析的方式先获得域名对应的 ip

```
   <link rel="dns-prefetch" href="//yu.com" />
```

- 缓存

```
    缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提升网页的整体加载速度
    通常浏览器的缓存策略分为两种：强缓存和协商缓存
    (1)强缓存
        实现强缓存可以通过两种响应头实现：Expires和Cache-Control,强缓存在缓存期间不需要请求，state code 为200
        Expires:Web,22 ,OCT 2018 08:41:00 GMT
        Expires是HTTP/1.0的产物,表示资源会在设置的时间后过期，需要在次请求，并且其受限于本地时间，修改本地时间后可能会导致缓存失效

        Cache-contril:max-age=30
        出现于HTTP/1.1,优先级高于Expires,表示自愿会在30秒后过期
    (2)协商缓存
        如果缓存过期了，我们就可以使用协商缓存来解决问题，协商缓存需要请求，如果缓存有效会返回304，协商huancun需要客户端和服务端共同实现
        ETag和if-None-Match
        ETag类似文件指纹，IF-Node-Match会将当前的Etag发送给服务器，询问该资源的Etag是否变动，有变动的话就将新的资源发送回来
```

### 优化渲染过程

- 懒执行

```
    懒执行就是将某些逻辑延迟到使用时在计算，该技术可用于首屏优化
```

- 懒加载

```
    懒加载就是将不关键的资源延后加载
    原理：只加载自定义区域,对于图片来说，先设置图片的标签src属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，将自定义属性替换为src,这样图片就会去下载资源
```

### 文件优化

- 图片优化

```
    图片采用CDN加载
    小图使用base64格式
    精灵图(将多个图标文件整合到一张图片上)
```

- CDN

```
    静态资源尽量使用CDN加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个CDN域名
```

### 其他

- 使用 Webpack 优化项目

```
    对于webpack4,打包项目使用production模式，自动开启代码压缩
    按照路由拆分代码，实现按需加载
```

## 框架通识

- MVVM

```
    (1)View:界面
    (2)Model：数据模型
    (3)ViewModel:作为桥梁负责沟通View和Model
    在MVVM中，UI是通过数据驱动的，数据一旦改变就会相应的刷新对应的UI，如果UI改变也会改变对应的数据
    在MVVM中，最核心的就是双向绑定(Vue中的数据劫持，Angluar的脏数据检测)
```

- 路由原理

```
    本质：监听URL的变化，然后匹配路由规则,显示相应的页面
    hash模式：通过hashchange事件监听到URL的变化，从而进行跳转页面
```

- 虚拟 DOM

```
    (1)为什么需要虚拟DOM?
        操作DOM是很耗费性能的事情，我们可以考录js对象模拟DOM对象，操作Js对象比操作DOM省时的多
    (2)虚拟DOM算法简述
        使用js来模拟了DOM，那么接下来的难点就是如果判断旧的对象和新的对象之间的差异
        * 判断算法的算法就分为了两步
            首先从到下，从左到右遍历对象，这一步会给每个节点添加索引，便于最后渲染差异
            一旦节点有子元素，就去判断子元素是否有不同
```

## Vue

- NextTick 原理分析

```
    nextTick可以让我们在下次DOM更新循环结束之后执行延迟回调,用于获取更新后的DOM
```

## React

- 对比算法

```
    当对比两颗树时,react首先比较两个根节点,根节点的type不同，其行为也不同
    (1)不同类型的元素
        每当根节点有不同类型，react将卸载旧树并重新构建新树，当树被卸载，旧的DOM节点将被销毁，组件实例会调用componWillUnmount()。当构建一颗新树，新的DOM节点被插入到DOM中，组件实例依次调用ComponentWillMount和ComponentDidMount()。任何与旧树有关的状态都被丢弃
        例如：<div>
                <Counter />
              </div>
              <span>
                <Counter />
              </span>
    (2)当比较两个相同类型的React
    DOM元素时，React会观察二者的属性，保持相同的底层DOM节点，并只更新变化的属性
    在处理DOM元素后，React递归其子元素
    (3)相同类型的组件元素
        当组件更新时，实例仍保持一致，以让状态能够在渲染之间保留，React通过更新底层组件实例的props产生新元素，并在底层实例上一次调用componentWillProps()和componentWillUpdate()方法
        接下来render方法被调用，同时对比算法会递归处理之前的结果和新的结果
```
