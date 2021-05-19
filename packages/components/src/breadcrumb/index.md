---
title: Breadcrumb 面包屑
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Breadcrumb

面包屑组件

## 代码演示

```tsx
import React from 'react';
import { Breadcrumb } from '@cz160/components';
export default () => {
  return (
    <>
      <Breadcrumb separator="~">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
```

## API

| 属性      | 说明                | 类型      | 默认值 |
| --------- | ------------------- | --------- | ------ |
| routes    | router 的路由栈信息 | routes[]  | -      |
| separator | 分隔符自定义        | ReactNode | /      |
