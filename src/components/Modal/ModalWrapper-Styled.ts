import styled, { keyframes } from 'styled-components';

const changeBackground = keyframes`
from{
  background-color: rgba(0, 0, 0, 0);
}to{
  background-color: rgba(0, 0, 0, 0.2);
}
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  animation: ${changeBackground} 0.3s ease-in;
  animation-fill-mode: forwards;
  z-index: 10;
`;
