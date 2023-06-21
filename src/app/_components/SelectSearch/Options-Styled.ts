import styled, { css } from 'styled-components';
import { EFFECT as effect } from '@/assets/color';

type StyledOptionLiProps = {
  $selected: boolean;
};

const getSelected = ({ $selected }: StyledOptionLiProps) => {
  switch ($selected) {
    case true: {
      return css`
        color: ${effect.SELECTED};
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
  background-color: ${effect.BACK};
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem ${effect.SHADOW};
  cursor: pointer;
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
    background-color: ${effect.HOVER_BACK};
    color: white;
    font-weight: 700;
  }
  ${(props) => getSelected(props)}
`;
