import { StyledButton } from '@/components/Button/Button-Styled';

type ButtonProps = {
  onClick?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg' | 'modal' | 'comb';
  content: string;
  disabled?: boolean;
};

const Button = ({
  onClick,
  type,
  color,
  hover,
  size,
  content,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      color={color}
      hover={hover}
      size={size}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
