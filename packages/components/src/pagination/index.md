---
title: Pagination 分页
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Pagination

分页组件

## 代码演示

```tsx
import React from 'react';
import { Pagination } from '@cz160/components';

export default () => {
  return <Pagination defaultCurrent={1} total={50} />;
};
```

## API

| 属性             | 说明                     | 类型    | 默认值 |
| ---------------- | ------------------------ | ------- | ------ |
| current          | 当前页数                 | number  | —      |
| defaultCurrent   | 默认的当前页数           | number  | 1      |
| defaultPageSize  | 默认的每页条数           | number  | 10     |
| disabled         | 禁用分页                 | boolean | -      |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false  |
