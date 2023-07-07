import styled from 'styled-components';
import { Palette } from '@/assets/color';

export const StyledEmptyContent = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.SPOT2_TEXT};
  & > svg {
    font-size: 3rem;
    margin-right: 1rem;
  }
  & > span {
    font-size: 2.5rem;
  }
`;
