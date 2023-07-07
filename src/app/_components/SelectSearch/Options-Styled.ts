import styled, { css } from 'styled-components';
import { Effect } from '@/assets/color';
import {
  StyledMenu,
  StyledMenuLi,
} from '@/components/NavbarContent/StyledUserMenu';

type StyledOptionLiProps = {
  $selected?: boolean;
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

export const StyledOptions = styled(StyledMenu)`
  left: 9.4rem;
  top: 3rem;
`;

export const StyledOptionLi = styled(StyledMenuLi)<StyledOptionLiProps>`
  ${(props) => getSelected(props)}
`;
