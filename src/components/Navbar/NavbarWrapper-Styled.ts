import { Layout } from '@/assets/size';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: relative;
  padding-top: 1.7rem;
  width: ${Layout.WIDTH};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    min-width: 26rem;
  }
`;
