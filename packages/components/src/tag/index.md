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
import React from 'react';
import { Tag } from '@cz160/components';

export default () => {
  const log = e => {
    console.log(e);
  };

  const preventDefault = e => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
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
