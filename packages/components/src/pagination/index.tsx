import React from 'react';
import cx from 'classnames';

interface PaginationProps {
  prefixCls?: string;
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  pageSize?: number;
  total?: number;
}

const Pagination: React.FC<PaginationProps> = props => {
  const {
    prefixCls = 'cz-pagination',
    current,
    defaultCurrent = 1,
    defaultPageSize = 10,
    disabled,
    pageSize,
    total = 0,
  } = props;
  //   const pageSize = pageSize || defaultPageSize
  const size: number = Math.ceil(total / (pageSize || defaultPageSize));
  console.log(size, 'size');
  return (
    <ul className={cx(prefixCls)}>
      <li className={cx(`${prefixCls}-prev`)}>
        {/* <button>&lt;</button> */}
        &lt;
      </li>
      {Array.from(new Array(5), (_, index) => {
        const target = index + 1;
        return (
          <li
            className={cx(`${prefixCls}-item`, `${prefixCls}-item-${target}`, {
              [`${prefixCls}-item-active`]: defaultCurrent == target,
            })}
            key={target}
          >
            {target}
            {/* <a>{target}</a> */}
          </li>
        );
      })}
      <li className={cx(`${prefixCls}-next`)}>
        {/* <button>&gt;</button> */}
        &gt;
      </li>
    </ul>
  );
};

export default Pagination;
