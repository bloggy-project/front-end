import styled from 'styled-components';
import { LAYOUT } from '@/assets/size';

export const StyledMain = styled.main`
  display: flex;
  width: ${LAYOUT.WIDTH};
  flex-wrap: wrap;
  align-items: center;
  background-color: lightcoral;
  margin-top: 1rem;
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
