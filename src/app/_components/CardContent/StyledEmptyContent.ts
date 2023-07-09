import styled from 'styled-components';
import { Palette } from '@/assets/color';

export const StyledEmptyContent = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.SPOT2_TEXT};
  & > svg {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
  & > p {
    font-size: 2rem;
  }
`;
