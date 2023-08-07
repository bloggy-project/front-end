import { Layout } from '@/assets/size';
import styled from 'styled-components';

export const StyledEditorcontainer = styled.div`
  width: ${Layout.WIDTH};
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
