import { Palette, Effect } from '@/assets/color';
import styled, { css } from 'styled-components';

type StyledTitleTextProps = {
  $hover?: boolean;
};

const onHover = ({ $hover }: StyledTitleTextProps) => {
  switch ($hover) {
    case true: {
      return css`
        &:hover {
          font-weight: 600;
          color: ${Palette.SPOT1};
        }
      `;
    }
  }
};

export const StyledViewerTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
  padding: 2rem 0;
  border-bottom: solid 1.5px ${Effect.SHADOW};
`;

export const StyledTitleText = styled.h1`
  font-size: 4rem;
`;

export const StyledInfoBox = styled.div`
  display: flex;
  margin-top: 4rem;
`;

export const StyledInfoText = styled.span<StyledTitleTextProps>`
  font-size: 1.4rem;
  ${(props) => onHover(props)}
`;

export const StyledInfoSpace = styled(StyledInfoText)`
  font-size: 1.2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
