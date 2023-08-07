import { Palette } from '@/assets/color';
import styled from 'styled-components';

export const StyledModalEditorContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.8rem 0.8rem 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSubContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSubContent = styled.div`
  padding: 0.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  height: 20rem;

  position: relative;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 28rem;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const StyledHead = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${Palette.NATURAL};
  margin-bottom: 1rem;
`;
