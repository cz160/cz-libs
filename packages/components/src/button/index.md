---
title: Button 按钮组件
group:
  title: 组件
  path: /demo
nav:
  title: 组件库
  path: /components
---

# Button 按钮组件

## 代码演示

```tsx
import React from 'react';
import { Button } from 'cz-components';
import { Sum } from 'cz-utils';
export default () => {
  const handleSum = () => {
    console.log(Sum([1, 2]));
  };
  return (
    <Button type="primary" onClick={handleSum}>
      累加
    </Button>
  );
};
```

## Api
