import { StyledLabel } from './Label-Styled';

type LabelProps = {
  content: string;
  htmlfor: string;
  fontSize: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
};

const Label = ({
  content,
  htmlfor,
  fontSize,
  fontWeight,
  padding,
  margin,
}: LabelProps) => {
  return (
    <StyledLabel
      fontSize={fontSize}
      htmlFor={htmlfor}
      fontWeight={fontWeight}
      padding={padding}
      margin={margin}
    >
      {content}
    </StyledLabel>
  );
};

export default Label;
