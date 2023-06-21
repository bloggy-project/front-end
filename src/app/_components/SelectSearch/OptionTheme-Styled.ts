import styled from 'styled-components';

type StyledThemeContainerProps = {
  $ishidden: boolean;
};

export const StyledThemeContainer = styled.div<StyledThemeContainerProps>`
  display: ${(props) => (props.$ishidden ? 'inline-block' : 'none')};
  position: relative;
  & > span {
    font-size: 2rem;
    cursor: pointer;
  }
  & > svg {
    position: relative;
    left: 0.2rem;
    top: 0.3rem;
    cursor: pointer;
  }
`;

export const StyledOptionTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 17rem;
  & > svg {
    display: none;
  }
  &:hover > svg {
    display: block;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

export const StyledArrowButton = styled.button`
  cursor: pointer;
  border: none;
  margin: 0 0.5rem;
  background-color: transparent;
  display: none;
  ${StyledOptionTheme}:hover & {
    display: block;
  }
`;
