import { StyledButton } from '@/components/Button/Button-Styled';

type ButtonProps = {
  onClick: () => void;
  color: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg';
  content: string;
};

const Button = ({ onClick, color, hover, size, content }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} hover={hover} size={size}>
      {content}
    </StyledButton>
  );
};

export default Button;
