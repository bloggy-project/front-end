import { Effect } from '@/assets/color';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  & > p {
    display: block;
    color: ${Effect.HOVER_BACK};
  }
`;
