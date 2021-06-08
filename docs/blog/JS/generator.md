## Generator(生成器)

> 简介

```
    (1)写法
        function关键字和函数名之间有一个“*”
        函数体内使用“yield”表达式
    (2)返回值
        返回一个遍历器对象(可以遍历Generator函数内部的每个状态)
    (3)调用
        1.调用Generator函数后，函数并不执行，返回的也不是函数的结果，而是一个(指向内部状态的指针对象)
        2.每次调用next方法，内部指针对象从当前位置开始执行，直到遇到下一个“yield”
```

> 实例

```js
//generator函数
function* test() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
//执行之后：生成一个指向函数内部对象的指针
var hw = test();
//执行next方法后,内部对象指针会从当前位置向下执行，直到遇到yield(或者return)停止
console.log(hw.next()); //{value:'hello',done:false} value属性：表示当前yield表达式的值，done属性：表示遍历是否结束
console.log(hw.next());
console.log(hw.next()); //return之后表示遍历已经结束，当前{value:'ending',done:true}
console.log(hw.next()); //遍历结束之后再执行永远输出{value:undefine,done:true}
/*
        总结：调用Generator函数，返回一直遍历器对象，代表Generator函数的内部指针
              以后每次调用遍历器对象的next方法，就会返回一个对象{value:...,done:false/true}
              value属性表示当前yield表达式的值，done:表示遍历是否结束
    */
```

> Generator 函数的异步应用

- 异步编程的方法

```
    回调函数
    事件监听
    发布/订阅
    promise对象
    Generator函数
```

- 协程(多个线程互相协作，完成异步任务)

```
    运行流程：
        协程A开始执行
        协程A执行到一半。执行权转移到B
        一段事件后。协程B交还执行权
        协程A恢复执行
        (协程A为异步任务)
```

- Generator 异步任务的实例

```js
    var fetch = require('node-fetch');
    function* gen(){
        var url='http://www.czhuangjia.top/mock/cookbook-list.json';
        var res=yield fetch(url)
    }
    //生成遍历对象
    var g=gen();
    //得到一个对象{value:Promise对象}
    var res=g.next();
    console.log(res)
    res.value.then(function(data){
        return data.json();
    }).then(function(data){
        // console.log(data)
    })
    Generator可以封装异步任务的根本原因：可以暂停执行和恢复执行
```
