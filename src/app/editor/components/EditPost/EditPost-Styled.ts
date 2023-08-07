import styled from 'styled-components';

export const StyledEditPostContainer = styled.div`
  margin-top: 2rem;
`;

export const StyledInputTitle = styled.input`
  width: 50%;
  padding: 1rem 0;
  margin: 0.2rem 0;
  font-size: 2.6rem;
  font-weight: bold;
  border: none;
  outline: none;
`;

export const StyledInputTagNames = styled(StyledInputTitle)`
  font-weight: 500;
  font-size: 1.8rem;
`;

export const StyledBtnContainer = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dadde6;
  border-radius: 4px;
`;
