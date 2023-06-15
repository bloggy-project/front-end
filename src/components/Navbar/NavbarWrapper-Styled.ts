import { LAYOUT } from '@/assets/size';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  padding-top: 1.7rem;
  width: ${LAYOUT.WIDTH};
  //추후 반응형 적용시 width: calc(100% - N) 적용
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
