import { PALETTE } from '@/assets/color';
import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${PALETTE.SPOT1};
  font-size: 16px;
  padding: 0 15px;
  border-radius: 4px;
  transition: all 1s;
  &:hover {
    opacity: 0.9;
  }
`;
