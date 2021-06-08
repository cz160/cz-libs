## Async await

```js
const getData = () =>
  new Promise(resolve => setTimeout(() => resolve('data'), 100));

const test = async () => {
  const data1 = await getData();
  console.log('data1', data1);
  const data2 = await getData();
  console.log('data2', data2);
  return 'success';
};
test().then(res => console.log(res));
console.log('---------------------------------');
function* test1() {
  const data1 = yield getData();
  console.log('data1', data1);
  const data2 = yield getData();
  console.log('data2', data2);
  return 'success';
}
const t = test1();
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log('---------------------------------');
// 模拟实现async await
const mockAsync = generatorFunc => {
  return function() {
    const gen = generatorFunc.apply(this.arguments);
    return new Promise((resolve, reject) => {
      function step(key, args) {
        let generatorResult;
        try {
          generatorResult = gen[key](args);
        } catch (e) {
          reject(e);
        }
        const { value, done } = generatorResult;
        if (done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            val => step('next', val),
            err => step('throw', err),
          );
        }
      }
      step('next');
    });
  };
};
```
