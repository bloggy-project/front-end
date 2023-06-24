import { StyledButton } from '@/components/Button/Button-Styled';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg' | 'full';
  content: string;
};

const Button = ({
  onClick,
  type,
  color,
  hover,
  size,
  content,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      color={color}
      hover={hover}
      size={size}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
