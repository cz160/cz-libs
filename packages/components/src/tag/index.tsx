import React, { useCallback, useState } from 'react';
import cx from 'classnames';
interface TagProps {
  closable?: boolean;
  prefixCls?: string;
  closeIcon?: React.ReactNode;
  color?: string;
  visible?: boolean;
  onClose?: (e) => void;
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = props => {
  const { prefixCls = 'cz-tag', children, closable, onClose } = props;

  const [isHidden, setIsHidden] = useState(false);

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
        [`${prefixCls}-hidden`]: isHidden,
      })}
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
