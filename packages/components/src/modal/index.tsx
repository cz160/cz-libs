import React, { useMemo } from 'react';
import Button from '../button';
import Dialog from 'rc-dialog';
import cx from 'classnames';
import { useCallback } from 'react';

type getContainerFunc = () => HTMLElement;

export interface IModalProps {
  /** 对话框是否可见 */
  visible?: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  afterClose?: () => void;
  /** 垂直居中 */
  centered?: boolean;
  /** 宽度 */
  width?: number;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 强制渲染 Modal */
  forceRender?: boolean;
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  getContainer?: string | HTMLElement | getContainerFunc | false | null;
  zIndex?: number;
  bodyStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  mask?: boolean;
  keyboard?: boolean;
  wrapProps?: any;
  prefixCls?: string;
  closeIcon?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = props => {
  const {
    visible = false,
    children,
    prefixCls = 'cz-modal',
    wrapClassName,
    centered,
    closeIcon,
    footer,
    ...restProps
  } = props;

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { onCancel } = props;
      if (onCancel) {
        onCancel(e);
      }
    },
    [props.onCancel],
  );

  const handleOk = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { onOk } = props;
      if (onOk) {
        onOk(e);
      }
    },
    [props.onCancel],
  );

  const wrapClassNameExtended = cx(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
  });

  // 渲染底部按钮
  const renderFooter = useMemo(() => {
    const { cancelText = '取消', okText = '确定' } = props;
    return (
      <>
        <Button onClick={handleCancel}>{cancelText}</Button>
        <Button
          onClick={handleOk}
          type="primary"
          className={`${prefixCls}-footer-button`}
        >
          {okText}
        </Button>
      </>
    );
  }, [props.cancelText, props.okText, handleOk, handleCancel]);

  // 渲染关闭按钮
  const closeIconToRender = useMemo(
    () => (
      <span className={`${prefixCls}-close-x`} onClick={handleCancel}>
        {closeIcon || <div className={`${prefixCls}-close-icon`}>✖️</div>}
      </span>
    ),
    [closeIcon, handleCancel],
  );

  return (
    <Dialog
      {...restProps}
      prefixCls={prefixCls}
      wrapClassName={wrapClassNameExtended}
      visible={visible}
      closeIcon={closeIconToRender}
      footer={footer ? footer : renderFooter}
    >
      {children}
    </Dialog>
  );
};

Modal.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
};

export default Modal;
