import styled from 'styled-components';

export const StyledScrollBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  padding: 9px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  & > svg {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const StyledScrollBtnContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
