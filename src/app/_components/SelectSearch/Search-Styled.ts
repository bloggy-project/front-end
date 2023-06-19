import styled, { keyframes, css } from 'styled-components';

type StyledSearchInputProps = {
  isopen: 'open' | 'close';
};

const changeWidth = keyframes`
from{
    width: 3rem;
}to{
    width: 24rem;
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
  width: 40rem;
  /* justify-content: center; */
  align-items: center;
`;

export const StyledSearchButton = styled.button`
  margin-left: 0.5rem;
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
  left: 3rem;
  margin-left: 0.5rem;
  padding: 0.3rem 2.6rem 0.3rem 0.6rem;
  font-size: 1.6rem;
  outline: none;
  ${(props) => getIsOpened(props)}
`;
