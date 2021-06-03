---
title: Modal 对话框
group:
  title: 基础组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Modal

对话框

## 代码演示

```tsx
import React, { useState, useCallback } from 'react';
import { Modal, Button } from '@cz160/components';

export default () => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Button onClick={open}>打开弹窗</Button>
      <Modal visible={visible} title="标题" onCancel={handleCancel}>
        内容
      </Modal>
    </>
  );
};
```

## API

<API></API>
