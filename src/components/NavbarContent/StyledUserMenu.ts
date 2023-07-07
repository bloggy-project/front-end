import styled from 'styled-components';
import { Effect } from '@/assets/color';

export const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 4.7rem;
  width: 10rem;
  border-radius: 5%;
  background-color: ${Effect.BACK};
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem ${Effect.SHADOW};
  cursor: pointer;
  z-index: 88;
  :last-child {
    border-bottom: none;
  }
`;

export const StyledMenuLi = styled.li`
  list-style: none;
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: solid 1px lightgray;
  font-size: 1.4rem;
  &:hover {
    background-color: ${Effect.HOVER_BACK};
    color: white;
    font-weight: 700;
  }
`;
