import styled, { css } from 'styled-components';

export type StyledThumbnailContainerProps = {
  size?: 'big';
};

export const getSize = ({ size }: StyledThumbnailContainerProps) => {
  switch (size) {
    case 'big': {
      return css`
        width: 12rem;
        height: 12rem;
      `;
    }
    default: {
      return css`
        width: 4rem;
        height: 4rem;
      `;
    }
  }
};

export const StyledThumbnailContainer = styled.div<StyledThumbnailContainerProps>`
  ${(props) => getSize(props)}
  position: relative;
  cursor: pointer;
  & > img {
    border-radius: 50%;
  }
`;
