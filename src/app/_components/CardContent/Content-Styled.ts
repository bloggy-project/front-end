import { Effect } from '@/assets/color';
import styled from 'styled-components';

export const StyledContent = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 5%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 1.2rem;
  height: 35rem;
  background-color: white;
  cursor: pointer;
  box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem ${Effect.SHADOW};
  &:hover {
    box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem ${Effect.HOVER_BACK};
    transform: translateY(-0.4rem);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 986px) {
    height: 40rem;
  }
  @media screen and (max-width: 768px) {
    min-width: 40rem;
    height: 47rem;
  }
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  height: 25rem;

  position: relative;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 986px) {
    height: 27rem;
  }
  @media screen and (max-width: 768px) {
    height: 30rem;
  }
`;

export const StyledDetails = styled.div`
  margin-top: 1rem;
  height: 12rem;
`;

export const StyledDetailsH3 = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.8rem;
  @media screen and (max-width: 986px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const StyledDetailsP = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 986px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledSubInfo1 = styled.div`
  & > span {
    font-size: 1.1rem;
    display: inline-block;
    margin: 0 0.5rem 0 0.5rem;
  }
`;
export const StyledSubInfo2 = styled.div`
  & > svg {
    display: inline;
    margin: 0 0.5rem 0 0.5rem;
  }
`;
