---
title: Tag 标签
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Tag

标签

##代码演示

```tsx
import React, { useState } from 'react';
import { Tag, Button } from '@cz160/components';

export default () => {
  const log = e => {
    console.log(e);
  };

  const preventDefault = e => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };

  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div>
        <header>基本</header>
        <Tag>Tag 1</Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
        <Tag closable onClose={preventDefault}>
          Prevent Default
        </Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">
            Link
          </a>
        </Tag>
      </div>
      <br />
      <div>
        <header>多彩标签</header>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>

        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
      </div>
      <br />

      <div>
        <header>预设状态的标签</header>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="default">default</Tag>
      </div>

      <br />

      <div>
        <header>控制关闭状态</header>
        <Tag closable visible={isVisible} onClose={() => setIsVisible(false)}>
          Movies
        </Tag>

        <Button size="small" onClick={() => setIsVisible(!isVisible)}>
          Toggle
        </Button>
      </div>
    </>
  );
};
```

<!-- <Tag closable onClose={log}>
      Tag 2
    </Tag>

    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag> -->
