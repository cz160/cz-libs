---
title: useMount
group:
  title: 生命周期
  path: /liftCycle
nav:
  title: hooks
  path: /hooks
---

# useMount

生命周期初始化钩子函数

## 代码演示

```tsx
import React, { useState } from 'react';
import { useMount } from '@cz160/hooks';
import { Button } from '@cz160/components';

export default () => {
  const [num, updateNum] = useState(0);

  useMount(() => {
    console.log('我只会在初始化执行');
  });

  return (
    <>
      <div>{num}</div>
      <Button type="primary" onClick={() => updateNum(num + 1)}>
        更新
      </Button>
    </>
  );
};
```

## API

```
const [ visible, showModal, hideModal,updateVisible ] = useModalVisible(
  initialVisible?: boolean,
);
```

## Params

| 参数           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| initialVisible | 可选项，传入默认的状态值 | boolean | false  |
