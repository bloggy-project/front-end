import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  animation: ${spinnerAnimation} 0.8s linear infinite;
`;
