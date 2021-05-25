import React from 'react';
import cx from 'classnames';

interface BreadcrumbItemProps {
  separator?: React.ReactNode;
  children?: React.ReactNode;
  prefixCls: string;
}

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { children, separator = '/', prefixCls = 'cz-breadcrumb' } = props;
  return (
    <span>
      <span className={cx(`${prefixCls}-link`)}>{children}</span>
      <span className={cx(`${prefixCls}-separator`)}> {separator} </span>
    </span>
  );
};

export default BreadcrumbItem;
