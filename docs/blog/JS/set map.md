# Set Map(集合)

## Set

Set 本身是一个构造函数，生成 Set 数据结构。Set 函数可以接受一个数组（或者是具有 iterable 接口的其他数据结构）作为参数，用来初始化。Set 对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。

> 特性

- 唯一性：所以成员的值唯一

```js
[...new Set([1,2,1])] => [1,2] //  数组去重
```

- 特殊值
  _ undefined 和 undefined 相等，会去重
  _ NaN 和 NaN 是不相等的，Set 中认为它相等，会进行去重
  > 属性
- size: 返回集合中元素的个数
  > 方法
- add(value): 添加值,返回 Set 结构,可链式调用
- delete(value): 删除某个值，返回 boolean 类型
- clear(): 清楚所有元素
- has(value): 判断集合中是否存在该元素，返回 boolean 类型
- keys(): 返回键名遍历
- values(): 返回键值遍历
- entries: 返回键值对遍历
- forEach(): 使用回调函数遍历每个成员。

> Set 和 Array 的对比

- Array 的 indexOf 方法比 Set 的 has 方法效率低下
- Set 不含有重复值（可以利用这个特性实现对一个数组的去重）
- Set 通过 delete 方法删除某个值，而 Array 只能通过 splice。两者的使用方便程度前者更优
- Array 的很多新方法 map、filter、some、every 等是 Set 没有的（但是通过两者可以互相转换来使用）

## Map

Map 中存储的是 key-value 形式的键值对, 其中的 key 和 value 可以是任何类型的, 即对象也可以作为 key。 Map 的出现，就是让各种类型的值都可以当作键。Map 提供的是 “值-值”的对应。

> 属性

- size: 返回集合中元素的个数
  > 方法
- set(key, val): 向 Map 中添加新元素
- get(key): 通过键值查找特定的数值并返回
- has(key): 判断 Map 对象中是否有 Key 所对应的值，有返回 true，否则返回 false
- delete(key): 通过键值从 Map 中移除对应的数据
- clear(): 将这个 Map 中的所有元素删除
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

> Map 和 Object 的对比

- Object 对象有原型， 也就是说他有默认的 key 值在对象上面， 除非我们使用 Object.create(null)创建一个没有原型的对象；
- 在 Object 对象中， 只能把 String 和 Symbol 作为 key 值， 但是在 Map 中，key 值可以是任何基本类型；
- 通过 Map 中的 size 属性， 可以很方便地获取到 Map 长度， 要获取 Object 的长度， 你只能手动计算
