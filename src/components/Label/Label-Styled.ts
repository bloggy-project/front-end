import { styled } from 'styled-components';

type StyledLabelProps = {
  fontSize: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
};

export const StyledLabel = styled.label<StyledLabelProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
