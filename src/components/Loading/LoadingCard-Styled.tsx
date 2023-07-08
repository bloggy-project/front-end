import { StyledContent } from '@/app/_components/CardContent/Content-Styled';
import { Effect } from '@/assets/color';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-color: ${Effect.SHADOW};;
  }
  100% {
    background-color: white;
  }
`;

export const StyledLoadingContent = styled(StyledContent)`
  animation: ${loadingAnimation} 1.2s ease-in-out;
`;
