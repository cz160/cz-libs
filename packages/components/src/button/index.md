---
title: Button
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Button

按钮组件

## 代码演示

```tsx
import React from 'react';
import { Button } from '@cz160/components';

export default () => {
  return (
    <>
      <Button onClick={e => console.log(e)}>111</Button>
      <br />
      <br />
      <Button type="primary">222</Button>
    </>
  );
};
```
