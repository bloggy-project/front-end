import styled from 'styled-components';
import { Effect } from '@/assets/color';

export const StyledThumbMenu = styled.ul`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  background-color: ${Effect.BACK};
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem ${Effect.SHADOW};
  cursor: pointer;
  z-index: 88;
  :last-child {
    border-bottom: none;
  }
`;

export const StyledLi = styled.li`
  list-style: none;
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  border-bottom: solid 1px lightgray;
  font-size: 1.4rem;
  &:hover {
    background-color: ${Effect.HOVER_BACK};
    color: white;
    font-weight: 700;
  }
  :last-child {
    font-size: 1.4rem;
    width: 100%;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-block;
`;

export const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
`;
