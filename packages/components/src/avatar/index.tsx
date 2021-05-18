import React from 'react';
import cx from 'classnames';
// import { user } from '@cz160/images';

export type AvatarShapes = 'square' | 'circle';
export type AvatarSize = number | 'large' | 'small' | 'default';

export interface AvatarProps {
  shape?: AvatarShapes;
  size?: AvatarSize;
  src?: string | React.ReactNode;
  children: React.ReactNode;
  alt?: string;
  prefixCls?: string;
}

const Avatar: React.FC<AvatarProps> = props => {
  const {
    shape = 'circle',
    size = 'default',
    children,
    src,
    alt,
    prefixCls = 'cz-avatar',
  } = props;

  const sizeStyle =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: size,
          fontSize: size / 2,
        }
      : {};

  let childrenToRender;
  // 只传递了图片过来 => 生成图片
  if (src && typeof src === 'string') {
    childrenToRender = <img src={src} alt={alt} />;
  }

  return (
    <span
      className={cx(prefixCls, {
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
      })}
      style={{ ...sizeStyle }}
    >
      {childrenToRender}
    </span>
  );
};

export default Avatar;
