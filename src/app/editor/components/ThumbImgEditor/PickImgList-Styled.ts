import { Palette } from '@/assets/color';
import { Layout } from '@/assets/size';
import styled, { keyframes } from 'styled-components';

export const StyledPickImgList = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    font-size: 2rem;
    cursor: pointer;
  }
  & > p {
    font-size: 1.4rem;
  }
`;
