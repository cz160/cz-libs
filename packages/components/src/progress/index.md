---
title: Progress 进度条
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Progress

进度条组件

## 代码演示

```tsx
import React from 'react';
import { Progress } from '@cz160/components';
export default () => {
  return (
    <>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />

      <br />

      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    </>
  );
};
```

<!--
  <Progress percent={50} status="active" />
  <Progress percent={70} status="exception" />
      -->

## API

| 属性          | 说明                                                   | 类型                                     | 默认值                   |
| ------------- | ------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| format        | 内容的模板函数                                         | function(percent, successPercent)        | (percent) => percent + % |
| percent       | 百分比                                                 | number                                   | 0                        |
| showInfo      | 是否显示进度数值或状态图标                             | boolean                                  | true                     |
| status        | 状态，可选：success exception normal active(仅限 line) | string                                   | -                        |
| strokeColor   | 进度条的色彩                                           | string                                   | -                        |
| strokeLinecap | 进度条的样式                                           | `round`\|`square`                        | round                    |
| success       | 成功进度条相关配置                                     | { percent: number, strokeColor: string } | -                        |
| trailColor    | 未完成的分段的颜色                                     | string                                   | -                        |
| type          | 类型，可选 `line` `circle` `dashboard`                 | string                                   | line                     |
