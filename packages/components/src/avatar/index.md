---
title: Avatar
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Avatar

头像组件

## 代码演示

```tsx
import React from 'react';
import { Avatar } from '@cz160/components';

export default () => {
  return (
    <>
      <Avatar shape="square" size="64">
        1
      </Avatar>
    </>
  );
};
```

## API

| 属性      | 说明                                                          | 类型                                       | 默认值  |
| --------- | ------------------------------------------------------------- | ------------------------------------------ | ------- |
| icon      | 设置头像的图标类型，可设为 Icon 的 type 或 VNode              | `string`\| `VNode` \| `slot`               |
| shape     | 指定头像的形状                                                | Enum{ 'circle', 'square' }                 | circle  |
| size      | 设置头像的大小                                                | number Enum{ 'large', 'small', 'default' } | default |
| src       | 图片类头像的资源地址                                          | `string`                                   | -       |
| srcSet    | 设置图片类头像响应式资源地址                                  | `string`                                   | -       |
| alt       | 图像无法显示时的替代文本                                      | `string`                                   | -       |
| loadError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | `() => boolean`                            | -       |
