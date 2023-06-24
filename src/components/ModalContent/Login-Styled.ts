import styled from 'styled-components';
import { Palette } from '@/assets/color';

export const StyledFormContainer = styled.div`
  padding: 1rem 1.5rem;
  margin-top: 2rem;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  & > button {
    margin-top: 2rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  border: 1px solid gray;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: ${Palette.SPOT1};
    border-width: 1.5px;
    outline: none;
  }
`;

export const StyledErrMsg = styled.p`
  height: 1.8rem;
  margin: 0.2rem 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${Palette.TWISTED1};
`;
