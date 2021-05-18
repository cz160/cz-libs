---
title: Space 间距
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Space

间距

## 代码演示

```tsx
/**
 * title: 默认使用
 * desc: 默认使用
 */
import React from 'react';
import { Space, Button } from '@cz160/components';

export default () => {
  return (
    <Space>
      <Button>111</Button>
      <Button>222</Button>
    </Space>
  );
};
```

```tsx
/**
 * title: 垂直方向
 * desc: direction属性
 */
import React from 'react';
import { Space, Button } from '@cz160/components';

export default () => {
  return (
    <Space direction="vertical">
      <Button>111</Button>
      <Button>222</Button>
    </Space>
  );
};
```

```tsx
/**
 * title: 自定义间距
 * desc: size属性
 */
import React from 'react';
import { Space, Button } from '@cz160/components';

export default () => {
  return (
    <Space direction="vertical" size={24}>
      <Button>111</Button>
      <Button>222</Button>
    </Space>
  );
};
```

## API

| 属性      | 说明     | 类型                                       | 默认值     |
| --------- | -------- | ------------------------------------------ | ---------- |
| align     | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | -          |
| direction | 间距方向 | `vertical` \| `horizontal`                 | horizontal |
| size      | 间距大小 | `small` \| `middle` \| `large` \| number   | small      |
