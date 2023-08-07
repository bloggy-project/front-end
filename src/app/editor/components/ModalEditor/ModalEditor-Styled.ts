import { Layout } from '@/assets/size';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const StyledModalEditorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledModalEditor = styled.div`
  position: fixed;
  bottom: 0;
  animation: ${slideUp} 0.3s ease-in-out;
  z-index: 1000;
  width: 80rem;
  /* @media screen and (max-width: 1340px) {
    width: calc(100vw - 4rem);
  } */
  @media screen and (max-width: 986px) {
    width: calc(100vw - 3rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
    min-width: 26rem;
  }
`;
