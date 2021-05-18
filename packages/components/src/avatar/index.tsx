import React from 'react';
import cx from 'classnames';

export type AvatarShapes = 'shape' | 'circle';
export type AvatarSize = 'large' | 'small' | 'default';

export interface AvatarProps {
  shape?: AvatarShapes;
  size?: AvatarSize;
  prefixCls?: string;
}

const Avatar: React.FC<AvatarProps> = props => {
  const { shape = 'circle', size = 'default', prefixCls = 'cz-avatar' } = props;

  return (
    <span
      className={cx(prefixCls, {
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${size}`]: size,
      })}
    ></span>
  );
};

export default Avatar;
