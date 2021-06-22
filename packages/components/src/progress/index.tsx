import React from 'react';
import cx from 'classnames';

interface ProgressProps {
  prefixCls?: string;
  percent?: number;
  status?: 'success' | 'exception' | 'normal' | 'active';
  type?: 'line' | 'circle' | 'dashboard';
  size?: 'small' | 'default';
  showInfo?: boolean;
}

const Progress: React.FC<ProgressProps> = props => {
  const {
    prefixCls = 'cz-progress',
    percent,
    status,
    type = 'line',
    size = 'default',
    showInfo = true,
  } = props;
  const height = size && size === 'small' ? 6 : 8;
  return (
    <div
      className={cx(prefixCls, {
        [`${prefixCls}-${type}`]: type && type !== 'line',
        [`${prefixCls}-status-${status}`]: status,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-status-success`]: percent >= 100,
        [`${prefixCls}-show-info`]: showInfo,
      })}
    >
      <div className={`${prefixCls}-outer`}>
        <div className={`${prefixCls}-inner`}>
          <div
            className={`${prefixCls}-bg`}
            style={{ width: `${percent}%`, height: `${height}px` }}
          ></div>
        </div>
      </div>
      {showInfo && (
        <span className={`${prefixCls}-text`} title={`${percent}%`}>
          {percent}%
        </span>
      )}
    </div>
  );
};

export default Progress;
