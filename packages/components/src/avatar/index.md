---
title: Avatar 头像
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
  order: 2
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
      <div>
        <Avatar size={64} />
        <Avatar size="large" />
        <Avatar />
        <Avatar size="small" />
      </div>
      <br />
      <br />
      <div>
        <Avatar shape="square" size={64} />
        <Avatar shape="square" size="large" />
        <Avatar shape="square" />
        <Avatar shape="square" size="small" />
      </div>
      <br />
      <br />
      <div>
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          U
        </Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} />
      </div>
    </>
  );
};
```

## API

| 属性  | 说明                                             | 类型                                       | 默认值  |
| ----- | ------------------------------------------------ | ------------------------------------------ | ------- |
| alt   | 图像无法显示时的替代文本                         | `string`                                   | -       |
| icon  | 设置头像的图标类型，可设为 Icon 的 type 或 VNode | `string`\| `VNode` \| `slot`               |
| shape | 指定头像的形状                                   | Enum{ 'circle', 'square' }                 | circle  |
| size  | 设置头像的大小                                   | number Enum{ 'large', 'small', 'default' } | default |
| src   | 图片类头像的资源地址                             | `string`                                   | -       |
