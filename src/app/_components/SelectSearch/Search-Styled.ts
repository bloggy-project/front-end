import styled, { keyframes, css } from 'styled-components';

type StyledSearchInputProps = {
  isopen: 'open' | 'close';
};

const changeWidth = keyframes`
from{
    width: 3rem;
}to{
    width: 25rem;
}
`;

const getIsOpened = ({ isopen }: StyledSearchInputProps) => {
  switch (isopen) {
    case 'open': {
      return css`
        display: block;
        animation: ${changeWidth} 0.3s ease-in;
        animation-fill-mode: forwards;
      `;
    }
    case 'close': {
      return css`
        visibility: hidden;
      `;
    }
  }
};

export const StyledSearchContainer = styled.div`
  display: flex;
  width: 39rem;
  align-items: center;
`;

export const StyledSearchButton = styled.button`
  position: relative;
  right: 4.5rem;
  margin-left: 2.5rem;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  height: 1.9rem;
  z-index: 30;

  .SearchButton {
    border-radius: 100%;
    font-size: 1.9rem;
    border-color: gray;
  }
`;

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
  position: relative;
  width: 3rem;
  padding: 0.4rem 2.5rem 0.4rem 0.7rem;
  font-size: 1.6rem;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  ${(props) => getIsOpened(props)}
`;
