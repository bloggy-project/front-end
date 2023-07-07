import styled from 'styled-components';

export const StyledThumbnailContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  position: relative;
  cursor: pointer;
  & > img {
    border-radius: 1rem;
  }
`;
