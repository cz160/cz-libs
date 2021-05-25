import React from 'react';
import cx from 'classnames';
import BreadcrumbItem from './item';

export interface BreadcrumbProps {
  separator?: React.ReactNode;
  prefixCls?: string;
  children?: React.ReactNode[];
}

interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
}

const Breadcrumb: BreadcrumbInterface = props => {
  const { separator, prefixCls = 'cz-breadcrumb', children } = props;
  let crumbs;
  if (children) {
    crumbs = children.map((element: any, index) => {
      return React.cloneElement(element, {
        separator,
        key: index,
      });
    });
  }
  return <span className={cx(prefixCls, {})}>{crumbs}</span>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
