import styled from 'styled-components';

export const StyledThumbnailContainer = styled.div`
  width: 4rem;
  height: 4rem;

  position: relative;
  cursor: pointer;
  & > img {
    border-radius: 1rem;
  }
`;
