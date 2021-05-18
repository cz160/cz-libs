import React, { useMemo } from 'react';
import cx from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import { useCallback } from 'react';

export type SpaceSize = 'small' | 'middle' | 'large' | number;
export type Direction = 'vertical' | 'horizontal';
export type Align = 'start' | 'end' | 'center' | 'baseline';

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};
export interface SpaceProps {
  size?: SpaceSize;
  direction?: Direction;
  children: React.ReactNode;
  prefixCls?: string;
  align?: Align;
}
const Space: React.FC<SpaceProps> = props => {
  const {
    size = 'small',
    direction = 'horizontal',
    prefixCls = 'cz-space',
    align,
    children,
  } = props;

  const childNodes = useMemo(() => toArray(children, { keepEmpty: true }), [
    children,
  ]);

  const getItemStyle = useCallback(
    (i: number) => {
      if (i === childNodes.length - 1) return null;
      const marginDirection =
        direction === 'vertical' ? 'marginBottom' : 'marginRight';
      return {
        [marginDirection]: spaceSize[size] || size,
      };
    },
    [childNodes, direction],
  );

  return (
    <div
      className={cx(prefixCls, {
        [`${prefixCls}-vertical`]: direction === 'vertical',
        [`${prefixCls}-align-${align}`]: align,
      })}
    >
      {childNodes.map((child, i) => (
        <div
          key={i}
          className={cx(`${prefixCls}-item`)}
          style={getItemStyle(i)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Space;
