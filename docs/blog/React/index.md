## 基础知识

- React 是一个 javascript 库,是一个针对处理 V 层的前端框架
- 搭建 react 脚手架：npx create-react-app my-app
  - npx 指借用工具安装后在删除这个工具

#### React 运行机制

1. 通过在组件中编写 jsx 语法糖进行页面编写虚拟 DOM
2. 通过 ReactDom.render()方法将虚拟 dom 编译处理成真实 dom

#### JSX

- 介绍：JSX 是一种 javascript 的语法拓展，在 React 中使用 JSX 来描述用户界面。
- 在 JSX 中使用表达式

```js
    const user = {
        name : 'cz'
    }
    function A(user){
        return user.name
    }
    //jsx语句
    const element = {
        <h1>my name is { A(user) }</h1>
    }
```

- JSX 本身其实也是一种表达式
  在被编译之后，JSX 其实被转化为普通的 js 对象

#### 元素渲染

React 元素被创建之后，是无法通过 dom 操作改变其内容或者属性的(可通过修改其 state 状态来触发 render 函数的执行，使其重新渲染)<br>
**注意：React 与 Vue 类似，在更新时也不会重新渲染所有，而是通过 diff 算法对比后,对改变的部分进行更新**

---

#### 组件

- 定义：组件可以将 UI 切分成一些独立的、可复用的部件(在 React 中由一个**js 文件和一个 CSS 文件**构成)
- 定义组件的方式：
  - 函数定义：
    ```
    function A(props){
    return <h1>Hello React </h1>
    }
    ~~~ \* 类定义组件
    ```
    class A extends React.Component{
    constructor(props){
    super(props)
    //接收到的数据在 props 上
    }
    render(){
    return (
    //可用 Fragment(来自 React)类似 Vue 的 template(编译后消失,不会出现在页面中)
    //在最外层要包上根节点
      <div>
      <h1>Hello React</h1>
      <span onClick={this.B}><span>
      </div>
        
      )
    }
    //属性初始化器:this 不会丢失
    B = (e)=>{
      
     }
    }
    ~~~
    **注意:组件命名首字母需大写(大驼峰),标签需要闭合(JSX)**

#### 组件渲染的方式

- 通过 DOM 标签

```
    <A />
    表示上面定义的组件A，可以在其他组件中使用
```

#### props 的只读性

- 无论是使用函数/类来声明组件，它决不能修改它自己 props(遵循数据单向流)

#### State(状态：属于组件自身)

- 组件的 state 只能组件组件自身修改(无状态组件吗没有 state)
- 修改组件状态的放

```js
    class TodoList extends Component {
        constructor (props) {
        super(props)
        this.state = {
            id: 2,
            _todos: [
                {id: 1, title: '今天下班算数据', isFinished: true},
                {id: 2, title: '今天加班', isFinished: false}
            ],
        }
    (1)this.setState({
        _todos:[]
    })
    这种写法适用于需要在更改状态的时候用到属性的时候使用，接收到的参数是当前的状态和最新的属性
    (2)this.setState((prevState, props) => {
        return {
            _todos: prevState._todos.concat(props.news)
        };
    })
```

- 注意
  - 不能直接更新状态(组件不会重新渲染)采用 setState 方法
  - 状态更新可能是异步的
    - React 会将多个 stateState()电泳合并一个调用来提高性能
    - this.props 和 this,state 可能是异步更新的，不能依靠它们的值来计算下一个状态

#### 事件处理

- React 事件处理与 Dom 元素很相似(语法不一样)
- 使用大驼峰

```
    例:点击事件
        原生js：onclick
        React:onClick
```

- 事件处理函数为函数，不为字符串
- React 事件处理函数会接收 e(经过 React 处理后的事件对象：处理了一些兼容问题等)
- 为了防止 this 丢失的解决办法
  - 通过 bind
  - 将时间处理函数写成箭头函数形式
  - 属性初始化器语法
- 向事件处理程序传递参数 \*参数 e 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

#### 条件渲染

```
    class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            isUpdate : false
        }
    }
    render(){
        <div className="title col-xs-8">
            {
                /*isUpdate?&&<input  type="text" defaultValue = {title}/>*/
                isUpdate?<input  type="text" defaultValue = {title}/>:<span>{title}</span>
            }
        </div>
```

- 通过三目运算符
- 通过与运算符 &&

#### 列表&keys

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];
```

- 可以用过 map 对组建或者元素进行循环
- 需要给每个元素加上一个 key 用于识别身份(在重新渲染时，不会重新渲染全部，而且通过 diff 算法对比，更新改变的元素，此时需要 key 来判别元素)
- ref 标记

```js
    //可以通过this.refs.input快速找出标记的input
    <input ref = {"input"} type="text"/>
    //将其挂载到this上，通过this.el快速定位
    <input ref={el=> this.el=el} type="text" />
```
