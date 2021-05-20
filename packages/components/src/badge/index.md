---
title: Badge 徽标
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Badge

徽标数

## 代码演示

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
      <Badge count={5} offset={[5, 10]}>
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

## API

| 属性          | 说明                                                                    | 类型                 | 默认值 |
| ------------- | ----------------------------------------------------------------------- | -------------------- | ------ |
| count         | 展示的数字，大于 overflowCount 时显示为 \${overflowCount}+，为 0 时隐藏 | ReactNode            | -      |
| overflowCount | 展示封顶的数字值                                                        | number               | 99     |
| showZero      | 当数值为 0 时，是否展示 Badge                                           | boolean              | false  |
| size          | 在设置了 count 的前提下有效，设置小圆点的大小                           | `default` \| `small` | -      |
