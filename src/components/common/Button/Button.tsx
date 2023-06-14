import { StyledButton } from '@/components/common/Button/Button-Styled';
import React from 'react';

type ButtonProps = {
  content: string;
  onClick: () => void;
  color: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg';
};

const Button = ({ content, onClick, color, hover, size }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} hover={hover} size={size}>
      {content}
    </StyledButton>
  );
};

export default Button;
