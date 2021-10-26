# var、let、const

用于声明变量

## var 命令

声明提升

```js
a = 1;
var a;
console.log(a); // 1
```

## let 命令

用法类似 var，但是所声明的变量只在 let 命令所在的代码块(以{}为一个代码块)有效

```js
{
  var a = 1;
  let b = 1;
}
console.log(a); // 1
console.log(b); // 报错
```

不存在声明提升

```js
console.log(a); // 报错ReferenceError
let a = 2;
```

暂时性死区(只要块级作用域内存在 let 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。)

```js
var a = 123;

if (true) {
  a = 'abc'; // ReferenceError
  let a;
}
```

不允许重复声明(let 不允许在相同作用域内，重复声明同一个变量。)

```js
function a() {
  let a = 10;
  let a = 1; // 报错
}
```

## const 命令

const 声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const a = 2;
a = 3; // 报错
```

```js
const a = { b: 1 };
a.b = 2; // 可修改
```

const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

## js 是如何支持块级作用域的

- 例子

```js
function foo() {
  var a = 1;
  let b = 2;
  {
    let b = 3;
    var c = 4;
    let d = 5;
    console.log(a);
    console.log(b);
  }
  console.log(b);
  console.log(c);
  console.log(d);
}
foo();
```

- 分析过程

```js
1. 编译并创建执行上下文
变量环境：
    {
        a:undefined,
        c: undefined,
    }
词法环境：
    {
       b: undefined
    }
2. 执行代码
变量环境：
    {
        a:1,
        c: undefined,
    }
词法环境：
    [
        {
           b: undefined,
           d: undefined,
        },
        {
           b: undefined
        }
    ]
当函数进入块级作用域时，通过let声明的变量会被存在词法环境的一个单独的区域中，这个区域的变量不影响块外面的变量。
3. 执行console.log(a)
优先从词法环境中查找(从上到下)，如果没有找到再从变量环境中查找
```
