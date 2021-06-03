## Hooks 基础

- hook 是 React16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
- hook 是一些可以让你在函数组件里“”钩入”React state 以及生命周期等特性的函数。
- hook 不能在 class 组件中使用
- React 内置了一些像 useSate 这样的 hook.你也可以创建自己的 hook 来复用不同组件之间的逻辑状态。

### 常见 Hooks 使用

- useState

```js
import React, { useState } from 'react
function Example() {
    const [count,setCount]=useState(0)
    return (
      <div>
       <p>You clicked {count}times</p>
        <button onClick={()=>setCount(count + 1)}>
            Click me
       </button>
     </div>
    );
 }
解析：
1.useState接受一个参数(当前状态初始值),返回一个数组包含当前状态值和更新当前状态的函数(参数为当前状态)
2.等价于你在react类写法中，定义了一个state(=useState的第一个返回值)，当前需要更改状态时，你需要调取setState函数(=useState的第二个返回值)
3.调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。）
```

- useEffect

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
解析：
* 副作用：在React组件中执行过数据获取、订阅、或者手动修改过DOM。我们将这些操作称为‘副作用’。
* 执行时机
  1.赋值给 useEffect的函数会在组件渲染到屏幕之后执行
  2.useEffect=componentDidMount，componentDidUpdate 和 componentWillUnmount这三个函数的组合。
  3.默认情况下，effect将在每轮渲染结束后执行，但你可以选择让它在只有某些值改变的时候才执行。
* 参数
    1.你想执行的副作用
    2.一个数组，表示只有当数组中的状态发生改变是才执行
* 返回值
    其返回值为一个函数，会在组件卸载的时候执行，可以做事件解绑、取消订阅、清楚定时器等操作来防止内存泄漏。
```

### Hook 使用规则

- 只在最顶层使用 Hook,不要在循环,条件或嵌套函数中调用 Hook。

```
原因：
当我们单个组件使用多个State Hook 或 Effect Hook时，React依靠调用的顺序判断哪个state对应哪个 useState。
```

- 只能在 React 的函数组件中调用，不要在其他 js 函数中调用。

### 自定义 Hook

- 自定义 Hook 就是一个函数，其名称以“use”开头，函数内部可以调用其他的 Hook.
- 自定义 Hook 是一种重用状态逻辑的机制，所有每次使用自定义 Hook 时，其中所有的 state 和副作用都是独立的。
