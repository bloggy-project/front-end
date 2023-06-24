import styled, { css } from 'styled-components';
import { Effect } from '@/assets/color';

type StyledOptionLiProps = {
  $selected: boolean;
};

const getSelected = ({ $selected }: StyledOptionLiProps) => {
  switch ($selected) {
    case true: {
      return css`
        color: ${Effect.SELECTED};
        font-weight: 700;
      `;
    }
    case false: {
      return css`
        color: gray;
        font-weight: 500;
      `;
    }
  }
};

export const StyledOptions = styled.div`
  position: absolute;
  left: 9.4rem;
  top: 3rem;
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

export const StyledOptionLi = styled.li<StyledOptionLiProps>`
  list-style: none;
  text-align: center;
  padding: 0.4rem 0;
  border-bottom: solid 1px lightgray;

  font-size: 1.4rem;
  &:hover {
    background-color: ${Effect.HOVER_BACK};
    color: white;
    font-weight: 700;
  }
  ${(props) => getSelected(props)}
`;
