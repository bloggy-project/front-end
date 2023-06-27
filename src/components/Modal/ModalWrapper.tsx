import React, { ReactNode } from 'react';
import { StyledModalWrapper } from './ModalWrapper-Styled';

interface ModalWrapperProps {
  // onClick: (e: React.MouseEvent) => void;
  children: ReactNode;
}

const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return <StyledModalWrapper>{children}</StyledModalWrapper>;
};

export default ModalWrapper;
