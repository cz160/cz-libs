---
title: useUnmount
group:
  title: 生命周期
  path: /liftCycle
nav:
  title: hooks
  path: /hooks
---

# useUnmount

只在组件 unmount 时执行的 hook。

## 代码演示

```tsx
import React, { useState } from 'react';
import { useUnmount } from '@cz160/hooks';

const Child = () => {
  useUnmount(() => {
    console.log('我只会在卸载时执行');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <button onClick={() => setFlag(!flag)}>
        {flag ? '未卸载' : '已卸载'}
      </button>
      {flag && <Child />}
    </>
  );
};
```

## API

```
useUnmount(fn: () => void);
```

## Params

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | unmount 时执行的函数 | `() => void` | -      |
