import styled from 'styled-components';
import { Layout } from '@/assets/size';
import { Palette } from '@/assets/color';

export const StyledMain = styled.main`
  display: flex;
  width: ${Layout.WIDTH};
  min-height: 40rem;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${Palette.SPOT2};
  border-radius: 2rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1340px) {
    width: calc(100vw - 4rem);
  }
  @media screen and (max-width: 986px) {
    width: calc(100vw - 3rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
  }
`;
