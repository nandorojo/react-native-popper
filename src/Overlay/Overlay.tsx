import React from 'react';
import { Modal } from 'react-native';
import { OverlayBackdrop } from './OverlayBackdrop';
import type { IOverlayProps } from '../types';
import { OverlayContainer } from './index';

export function Overlay(props: IOverlayProps) {
  const {
    isOpen,
    children,
    closeOnOutsideClick = true,
    onClose,
    mode = 'single',
  } = props;

  const handleClose = React.useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  let Parent = ({ children }: any) => (
    <Modal visible={true} transparent>
      {children}
    </Modal>
  );

  if (mode === 'multiple') {
    Parent = ({ children }: any) => (
      <OverlayContainer>{children}</OverlayContainer>
    );
  }

  return (
    <Parent>
      <OverlayBackdrop onPress={handleClose} disabled={!closeOnOutsideClick} />
      {children}
    </Parent>
  );
}
