import { Layout } from '@/assets/size';
import styled from 'styled-components';

export const StyledViewercontainer = styled.div`
  width: ${Layout.POST}rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;
