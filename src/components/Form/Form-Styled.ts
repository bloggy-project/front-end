import styled, { css } from 'styled-components';
import { Palette } from '@/assets/color';

type CombInputProps = {
  combbtntext?: string;
};

type TextareaProps = {
  height: string;
};

const getSize = ({ combbtntext }: CombInputProps) => {
  if (combbtntext) {
    const btnWidth = `${combbtntext.toLowerCase().length}rem`;
    return css`
      width: calc(88% - ${btnWidth});
    `;
  }
};

export const StyledFormContainer = styled.div`
  padding: 1rem 1.5rem;
  margin-top: 2rem;
`;

export const StyledSingleFormContainer = styled.div`
  width: 100%;
`;

export const StyledSingleForm = styled.form`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & > button {
    margin-top: 2rem;
  }
`;

export const StyledLabel = styled.label`
  display: block; /* add this */
  padding: 0.2rem 0;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1rem 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  border: 1px solid gray;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: ${Palette.TWISTED1};
    border-width: 1.5px;
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea<TextareaProps>`
  width: 100%;
  height: ${(props) => props.height};
  border: 1px solid gray;
  border-radius: 10px;
  resize: none;
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  &:focus {
    border-color: ${Palette.TWISTED1};
    border-width: 1.5px;
    outline: none;
  }
`;

export const StyledCombInput = styled(StyledInput)<CombInputProps>`
  ${(props) => getSize(props)}
`;

export const StyledCombTextarea = styled(StyledTextarea)<CombInputProps>`
  ${(props) => getSize(props)}
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTextareaContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const StyledIconInputContainer = styled(StyledInputContainer)`
  position: relative;
  align-items: start;
  & > svg {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
`;

export const StyledErrMsg = styled.p`
  height: 1.8rem;
  margin: 0.2rem 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${Palette.TWISTED1};
`;
