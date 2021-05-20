import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
// import {isNumber} from '../utils/common';

interface BadgeProps {
  prefixCls?: string;
  size?: 'small' | 'default';
  offset?: [number, number];
  count?: number;
  showZero?: boolean;
  overflowCount?: number;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = props => {
  const {
    prefixCls = 'cz-badge',
    size = 'default',
    offset,
    count,
    showZero = false,
    overflowCount = 99,
    children,
  } = props;
  // const [left = 0, top = 0] = offset;

  let currentCount;
  let isMultipleWords = false;

  // todo 待优化
  currentCount = count > overflowCount ? `${overflowCount}+` : count;
  isMultipleWords = count > overflowCount || false;

  let currentStyle: React.CSSProperties = {};
  if (offset) {
    currentStyle = {
      marginTop: offset[1],
      right: -offset[0],
    };
  }

  return (
    <span className={prefixCls}>
      {children}
      {!showZero && !count ? null : (
        <sup
          className={cx(`${prefixCls}-count`, {
            [`${prefixCls}-count-sm`]: size === 'small',
            [`${prefixCls}-multiple-words`]: isMultipleWords,
          })}
          style={currentStyle}
        >
          {currentCount}
        </sup>
      )}
    </span>
  );
};

export default Badge;
