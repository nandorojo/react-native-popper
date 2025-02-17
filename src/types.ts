import type { ReactElement, RefObject } from 'react';
import type { ViewStyle } from 'react-native';

export type IPopoverArrowProps = {
  height?: number;
  width?: number;
  children?: React.ReactNode;
  color?: string;
  style?: ViewStyle;
};

export type IPopoverArrowImplProps = {
  placement?: string;
  arrowProps: IArrowProps;
  width: number;
  height: number;
  style: ViewStyle;
} & IPopoverArrowProps;

export type IArrowProps = {
  style: Object;
};

// Tooltip is rendered in Non RN modal which won't shift accessibilityFocus
export type OverlayType = 'single' | 'multiple';

export type IPopoverProps = {
  focusable?: boolean;
  // mode?: OverlayType;
  defaultIsOpen?: boolean;
  on?: 'press' | 'longPress' | 'hover';
  isOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  shouldFlip?: boolean;
  crossOffset?: number;
  offset?: number;
  children: React.ReactNode;
  shouldOverlapWithTrigger?: boolean;
  trigger: ReactElement | RefObject<any>;
  animated?: boolean;
  animationEntryDuration?: number;
  animationExitDuration?: number;
  shouldCloseOnOutsideClick?: boolean;
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom';

  // Web only
  isKeyboardDismissable?: boolean;
  autoFocus?: boolean;
  trapFocus?: boolean;
  restoreFocus?: boolean;
};

export type IPopoverContentImpl = {
  arrowHeight: number;
  arrowWidth: number;
  placement?: string;
  children: any;
};

export type IPopoverContent = {
  children: React.ReactNode;
};

export type IArrowStyles = {
  placement?: string;
  height?: number;
  width?: number;
};

export type IScrollContentStyle = {
  placement?: string;
  arrowHeight: number;
  arrowWidth: number;
};

export type IOverlayProps = {
  focusable?: boolean;
  isOpen: boolean;
  children: any;
  onClose: any;
  isKeyboardDismissable?: boolean;
  shouldCloseOnOutsideClick?: boolean;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  trapFocus?: boolean;
  animated?: boolean;
  animationEntryDuration?: number;
  animationExitDuration?: number;
  overlayRef?: RefObject<any>;
  triggerRef?: RefObject<any>;
};
