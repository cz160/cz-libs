---
order: 0
---

## 基础知识

### 数据类型

- 基础数据类型

```
number: 数字类型
string: 字符串类型
boolean: 布尔类型
null
undefined
bigint
symbol
```

- 引用数据类型

```
object
```

- 查询变量类型

```js
typeOf 0 // number
typeOf '1' // string
typeOf NaN // number
typeOf 1n // bigint
typeOf [] // object
```

### 运算符

- 算数运算符

```js
+ - * / %
```

- 关系运算符

```js
> < >= <= == != === !==
注释：
    ==: 仅比较值
    ===: 比较值和类型
```

- 逻辑运算符

```js
&& : 同真为真(且)
|| : 有真为真(或)
!: 取反(逻辑非)
```

- 位运算符

```js
&(与): 同1为1
^(异或): 不同为1
例子：
3 & 5 = 0011&0101 = 0001(同1为1) = 1
3 ^ 5 = 0011&0101 = 0110(不同为1) = 6
```
