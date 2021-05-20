---
title: Badge 徽标
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

```tsx
import React from 'react';
import { Badge } from '@cz160/components';
import './index.less';

export default () => {
  return (
    <>
      <Badge count={5} size="small">
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={5} offset={[10, 10]}>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={5}>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={100}>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={0}>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={0} showZero>
        <a href="#" className="head-example" />
      </Badge>
      <Badge count={20} overflowCount={10}>
        <a href="#" className="head-example" />
      </Badge>
    </>
  );
};
```
