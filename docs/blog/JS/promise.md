---
nav:
  title: 博客更新
  path: /blog
  order: 1
---

## Promise

#### 原生 Promise 解析

> 简介

- promise 是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理和强大。
- promise 简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果，从语法上来说，Promise 是一个对象，从它可以获取异步操作的消息，Promise 提供统一的 API,各种异步操作都可以用同样的方法进行处理
  > 特点
- 对象的状态不受外界影响，Promise 对象代表一个异步操作，有三种状态：Pendding、fulfilled、rejected。只有异步操作的结果，可以决定当前是哪一种状态，其他操作都无法改变这个状态。
- 一旦状态改变，就不会在变，任何时候都可以得到这个结果，只有两种可能：从 Pendding 变为 fulfilled 和从 Pendding 变为 rejected。只要这两种情况发生，状态就凝固了，会一直保持这个结果，这时就称为 resolved。

#### 利用 es6 进行 Promise 封装

> 处理同步任务

- 原生方法调用方式

```js
new Promise((resolve, reject) => {
  resolve(1);
}).then(res => {
  console.log(res); //1
});
```

- 同步封装思考

```
    1.由调用方式可见Promise是一个类
    2.它接收一个回调函数，这个回调函数接受resolve和reject方法作为参数
    3.当状态改变后执行then方法，并将resolve或reject的结果作为then方法接受回调函数的参数
```

```js
class Mypromise {
  constructor(callback) {
    this.status = 'pendding';
    //成功结果
    this.s_res = null;
    // 失败结果
    this.f_res = null;
    callback(
      arg => {
        // 使用箭头函数this不会丢失
        // 改变状态为成功
        this.status = 'fulfilled';
        this.s_res = arg;
      },
      arg => {
        // 改变状态为失败
        this.status = 'rejected';
        this.f_res = arg;
      },
    );
  }
  then(onresolve, onreject) {
    if (this.status === 'fulfilled') {
      // 当状态为成功时
      onresolve(this.s_res);
    } else if (this.status === 'rejected') {
      // 当状态为失败时
      onreject(this.f_res);
    }
  }
}
```

> 处理异步任务

- 原生调用方式

```js
new Promise((resolve, reject) => {
  setTimeOut(() => {
    resolve(1);
  }, 1000);
}).then(res => {
  console.log(res);
});
```

- 异步封装思考

```
    1.根据js执行机制，setTimeOut属于宏任务，then回调函数属于微任务，当主线程执行完成后，会从异步队列中
    取出本次的微任务先执行。
    2.也就是说，then方法执行时，状态还没有改变，所有我们需要将then方法执行的回调保存起来，等到异步代码执行
    完成后，在统一执行then方法的回调函数
```

```js
class Mypromise {
  constructor(callback) {
    this.status = 'pendding';
    //成功结果
    this.s_res = null;
    // 失败结果
    this.f_res = null;
    this.query = []; // ++
    callback(
      arg => {
        // 使用箭头函数this不会丢失
        // 改变状态为成功
        this.status = 'fulfilled';
        this.s_res = arg;
        // 当状态改变后，统一执行then方法的回调
        this.query.forEach(item => {
          item.resolve(arg);
        });
      },
      arg => {
        // 改变状态为失败
        this.status = 'rejected';
        this.f_res = arg;
        // 当状态改变后，统一执行then方法的回调
        this.query.forEach(item => {
          item.reject(arg);
        });
      },
    );
  }
  then(onresolve, onreject) {
    if (this.status === 'fulfilled') {
      // 当状态为成功时
      onresolve(this.s_res);
    } else if (this.status === 'rejected') {
      // 当状态为失败时
      onreject(this.f_res);
    } else {
      // ++ 状态没有改变
      this.query.push({
        // 保存回调函数到队列中
        resolve: onresolve,
        reject: onreject,
      });
    }
  }
}
```

> 处理链式调用

- 原生调用方式

```js
new Promise((resolve, reject) => {
  resolve(1);
})
  .then(res => {
    return res;
  })
  .then(res => {
    console.log(res);
  });
```

- 链式调用思考

```
    原生的Promise对象的then方法，返回的也是一个Promise对象，一个新的Promise才能支持链式调用
    下一个then方法可以接受上一个then方法的返回值作为回调函数的参数
    主要考虑上一个then方法的返回值：
        1.Promise对象/具有then方法的对象
        2.其他值
        第一个then方法返回一个Promise对象，它的回调函数接受resFn和rejFN两个回调函数作为参数，
        把成功状态的处理封装为handle函数，接受成功的结果作为参数
        在handle函数，根据onresolve返回值的不同做出不同的处理
```

```js
class Mypromise {
  constructor(callback) {
    this.status = 'pendding';
    //成功结果
    this.s_res = null;
    // 失败结果
    this.f_res = null;
    this.query = []; // ++
    callback(
      arg => {
        // 使用箭头函数this不会丢失
        // 改变状态为成功
        this.status = 'fulfilled';
        this.s_res = arg;
        // 当状态改变后，统一执行then方法的回调
        this.query.forEach(item => {
          item.resolve(arg);
        });
      },
      arg => {
        // 改变状态为失败
        this.status = 'rejected';
        this.f_res = arg;
        // 当状态改变后，统一执行then方法的回调
        this.query.forEach(item => {
          item.reject(arg);
        });
      },
    );
  }
  then(onresolve, onreject) {
    return new Mypromise((resFN, rejFN) => {
      if (this.status === 'fulfilled') {
        // 当状态为成功时
        handle(this.s_res);
      } else if (this.status === 'rejected') {
        // 当状态为失败时
        errBack(this.f_res);
      } else {
        // ++ 状态没有改变
        this.query.push({
          // 保存回调函数到队列中
          resolve: onresolve,
          reject: onreject,
        });
      }
      function handle(value) {
        // 当then方法的onresolve方法有返回值时，保存其返回值，没有使用其保存的值
        let returnVal =
          (onresolve instanceof Function && onresolve(value)) || value;
        // 如果onresolve方法返回的是promise对象，则调用其then方法
        if (returnVal && returnVal['then'] instanceof Function) {
          returnVal.then(
            res => {
              resFN(res);
            },
            err => {
              rejFN(err);
            },
          );
        } else {
          resFN(returnVal);
        }
      }
      function errBack(reason) {
        if (onreject instanceof Function) {
          let returnVal = reject(reason);
          if (
            typeof returnVal !== 'undenfined' &&
            returnVal['then'] instanceof Function
          ) {
            returnVal.then(
              res => {
                resFN(res);
              },
              err => {
                rejFN(err);
              },
            );
          } else {
            resFN(returnVal);
          }
        } else {
          rejFN(reason);
        }
      }
    });
  }
}
```

> Promise.all 和 Promise.race 方法

- 原生调用方式

```
    Promise.all方法接受一个数组，数组中的每一项都是一个Promise实例，只有数组中的所有Promise实例的状态
    都变为fulfilled时，此时整个状态才会变成fulfilled,此时数组中所有Promise实例的返回值组成一个新的数组，
    进行传递。
    Promise.race方法和Promise.all方法一样，如果不是Promise实例，就会先调用Promise.resolve方法，将参数
    转为Promise实例,在进行下一步处理。
    只要数组中有一个参数的状态变为fulfilled就会进行传递
```

```js
    // 将现有对象转换为Promise对象
    Mypromise.resolve = (arg)=>{
        if(typeof arg == 'undefined' || arg==null){ // 不带有任何参数
            return new Mypromise(resolve=>{
                resolve(arg)
            })
        }else if(arg instanceof Mypromise){ // 是一个Mypromise实例
            return arg
        }else if(arg['then'] instanceof Function){ // 具有then方法的对象
            return new Mypromise((resolve,reject)=>{
                arg.then(res=>{
                    resolve(res)
                },err=>{
                    reject(err)
                })
            })
        }else{ // 参数不是具有then方法的对象，或根本不是对象
           return new Mypromise(resolve=>{
                resolve(arg)
            })
        }
    }
    Mypromise.all = (arr)=>{
        if(!Array.isArray(arr)){
            throw new TypeError('参数必须是一个数组')
        }
        return new Mypromise((resolve,reject)=>{
            let i=0,result=[]
            next()
            functon next(){
                // 如果不是Mypromise实例需要转换
                Mypromise.resolve(arr[i]).then(res=>{
                    result.push(res)
                    i++
                    if(i===arr.length){
                        resolve(result)
                    }else{
                        next()
                    }
                },reject)
            }
        })
    }
    Mypromise.race = (arr)=>{
        if(!Array.isArray(arr)){
            throw new TypeError('参数必须是一个数组')
        }
        return new Mypromise((resolve,reject)=>{
            let done = false
            arr.forEach(item=>{
                Mypromise.resolve(item).then(res=>{
                    if(!done){
                        resolve(res)
                        done = true
                    }
                },err=>{
                    if(!done){
                        reject(res)
                        done = true
                    }
                })
            })
        })
    }
```

> 处理 Mypromise 状态确定不能改变的特性

```
    在重写callback中的resolve和reject方法执行前，先判断状态是否为'pendding'
```
