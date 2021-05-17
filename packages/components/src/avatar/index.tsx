import React from 'react';
import cx from 'classnames';
import { useCallback } from 'react';

export type AvatarShapes = 'shape' | 'circle';
export type AvatarSize = 'large' | 'small' | 'default';

export interface AvatarProps {
  shape?: AvatarShapes;
  size: AvatarSize;
  // prefixCls?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
const Avatar: React.FC<AvatarProps> = props => {
  const {
    shape = 'circle',
    size = 'default',
    disabled = false,
    children,
    // prefixCls = 'cz-btn',
    onClick,
  } = props;

  // 处理点击事件
  const handleClick = useCallback(
    e => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    // <button
    //   className={cx(prefixCls, {
    //     [`${prefixCls}-${type}`]: type,
    //   })}
    //   onClick={handleClick}
    //   disabled={disabled}
    // >
    //   {children}
    // </button>
  );
};

export default Avatar;
