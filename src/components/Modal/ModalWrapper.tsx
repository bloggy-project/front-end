import React, { ReactNode } from 'react';
import { StyledModalWrapper } from './ModalWrapper-Styled';

interface ModalWrapperProps {
  onClick: (e: React.MouseEvent) => void;
  children: ReactNode;
}

const ModalWrapper = ({ children, onClick }: ModalWrapperProps) => {
  return <StyledModalWrapper onClick={onClick}>{children}</StyledModalWrapper>;
};

export default ModalWrapper;
