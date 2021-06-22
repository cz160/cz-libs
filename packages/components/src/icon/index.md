---
title: Icon 图标
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Icon

图标

## 当前支持图标演示

```tsx
/**
 * title: 默认使用
 * desc: 默认使用
 */
import React from 'react';
import { Icon, Space } from '@cz160/components';

export default () => {
  return (
    <Space size={24}>
      <Icon type="left" onClick={() => console.log('111')} />
      <Icon type="loading" />
      <Icon type="down" />
      <Icon type="delete" />
      <Icon type="right" />
      <Icon type="update" />
      <Icon type="settings" />
      <Icon type="download" />
      <Icon type="up" />
      <Icon type="add" />
    </Space>
  );
};
```

## API

| 属性      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| type      | 图标类型 | string | -      |
| className | 图片样式 | string | -      |
