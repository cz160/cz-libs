import React from 'react';
import cx from 'classnames';

interface DividerProps {
  prefixCls?: string;
  className?: 'string';
  dashed?: boolean;
  orientation?: 'left' | 'right' | 'center';
  plain?: boolean;
  style?: React.CSSProperties;
  type?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = props => {
  const {
    prefixCls = 'cz-divider',
    className,
    orientation = 'center',
    type = 'horizontal',
    plain = false,
    dashed = false,
    children,
  } = props;
  return (
    <div
      className={cx(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-with-text`]: children,
        [`${prefixCls}-with-text-${orientation}`]: children && orientation,
      })}
    >
      <span
        className={cx({
          [`${prefixCls}-inner-text`]: children,
        })}
      >
        {children}
      </span>
    </div>
  );
};

export default Divider;
