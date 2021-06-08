import React, { useCallback, useState } from 'react';
import cx from 'classnames';

export const PresetColorTypes = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

export const StatusColorTypes = [
  'success',
  'processing',
  'error',
  'default',
  'warning',
];

interface TagProps {
  closable?: boolean;
  prefixCls?: string;
  // closeIcon?: React.ReactNode;
  color?: string;
  visible?: boolean;
  onClose?: (e) => void;
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = props => {
  const {
    prefixCls = 'cz-tag',
    children,
    closable,
    color,
    onClose,
    visible,
  } = props;

  const isPresetColor = PresetColorTypes.includes(color);
  const isStatusColor = StatusColorTypes.includes(color);
  const hasColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color);

  const style = {
    backgroundColor:
      !isPresetColor && !isStatusColor && color && hasColor ? color : undefined,
  };

  const [isHidden, setIsHidden] = useState(visible || false);

  const handleClick = useCallback(
    e => {
      if (onClose) {
        onClose(e);
        setIsHidden(true);
      }
    },
    [onClose, setIsHidden],
  );
  return (
    <span
      className={cx(prefixCls, {
        [`${prefixCls}-hidden`]: isHidden && !visible,
        [`${prefixCls}-${color}`]: isPresetColor || isStatusColor,
        [`${prefixCls}-has-color`]: color && hasColor && !isPresetColor,
      })}
      style={style}
    >
      {children}
      {closable ? (
        <span className={cx(`${prefixCls}-close-icon`)} onClick={handleClick}>
          x
        </span>
      ) : null}
    </span>
  );
};

export default Tag;
