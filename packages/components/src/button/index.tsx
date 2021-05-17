import React from 'react';
import cx from 'classnames';
import { useCallback } from 'react';

export type ButtonTypes = 'primary' | 'default';
export interface ButtonProps {
  type?: ButtonTypes;
  children: React.ReactNode;
  prefixCls?: string;
  onClick?: (e: any) => void;
}
const Button: React.FC<ButtonProps> = props => {
  const { type = 'default', children, prefixCls = 'cz-btn', onClick } = props;

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
    <button
      className={cx(prefixCls, {
        [`${prefixCls}-${type}`]: type,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
