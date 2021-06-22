import React from 'react';
import cx from 'classnames';

const scriptElem = document.createElement('script');
scriptElem.src = '//at.alicdn.com/t/font_1774210_cbqg82ot40m.js';
document.body.appendChild(scriptElem);

interface IProps {
  className?: string;
  prefixCls?: string;
  type:
    | 'left'
    | 'loading'
    | 'down'
    | 'delete'
    | 'right'
    | 'update'
    | 'settings'
    | 'download'
    | 'up'
    | 'add';
}
const Icon: React.FC<IProps> = props => {
  const { className, type, prefixCls = 'cz-icon', ...restProps } = props;
  return (
    <>
      <svg
        className={cx(prefixCls, className)}
        aria-hidden="true"
        {...restProps}
      >
        <use xlinkHref={`#i-${type}`} />
      </svg>
    </>
  );
};

export default Icon;
