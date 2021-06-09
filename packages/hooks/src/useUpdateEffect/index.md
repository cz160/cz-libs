---
title: useUpdateEffect
group:
  title: 生命周期
  path: /liftCycle
nav:
  title: hooks
  path: /hooks
  order: 3
---

# useUpdateEffect

依赖更新时钩子函数

## 代码演示

```tsx
import React, { useState } from 'react';
import { useUpdateEffect } from '@cz160/hooks';
import { Button, Space } from '@cz160/components';

export default () => {
  const [num, updateNum] = useState(0);

  useUpdateEffect(() => {
    console.log('我只会在num更新时执行');
  }, [num]);

  return (
    <Space>
      <Button>当前：{num}</Button>
      <Button type="primary" onClick={() => updateNum(num + 1)}>
        +
      </Button>
    </Space>
  );
};
```

## Params

| 参数 | 说明                 | 类型       | 默认值 |
| ---- | -------------------- | ---------- | ------ |
| fn   | 需要被执行的回调函数 | () => void | -      |
| deps | 依赖项               | any[]      | -      |
