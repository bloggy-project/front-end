import styled, { css, keyframes } from 'styled-components';
import { Palette } from '@/assets/color';

export type StyledTabButtonProps = {
  $active: boolean;
};

const changeModalWidth = keyframes`
from{
  width: 19rem;
}to{
  width: 40rem;
}
`;

export const StyledModalContent = styled.div`
  animation: ${changeModalWidth} 0.5s ease-in-out;
  animation-fill-mode: forwards;
  margin: 2rem;
`;

export const getActiveAuth = ({ $active }: StyledTabButtonProps) => {
  switch ($active) {
    case true: {
      return css`
        font-size: 1.8rem;
        padding: 1rem 1.5rem;
        color: ${Palette.SPOT1};
      `;
    }
    case false: {
      return css`
        font-size: 1.8rem;
        padding: 1rem 1.5rem;
        color: lightgray;
      `;
    }
  }
};

export const StyledTabButton = styled.button<StyledTabButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 600;
  ${(props) => getActiveAuth(props)}
`;

export const StyledTabButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 0;
`;
