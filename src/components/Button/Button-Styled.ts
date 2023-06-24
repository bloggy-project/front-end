import styled, { css } from 'styled-components';

type StyledButtonProps = {
  color?: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg' | 'full';
};

const getSize = ({ size = 'md' }) => {
  switch (size) {
    case 'sm': {
      return css`
        font-size: 1.4rem;
        font-weight: 650;
        padding: 0.5rem 0.7rem;
      `;
    }
    case 'lg': {
      return css`
        font-size: 1.8rem;
        font-weight: 700;
        padding: 0.8rem 1rem;
      `;
    }
    case 'full': {
      return css`
        font-size: 1.8rem;
        font-weight: 700;
        padding: 0.8rem 1rem;
        width: 100%;
        border-radius: 10px;
      `;
    }
    default: {
      return css`
        font-size: 1.6rem;
        font-weight: 700;
        padding: 0.6rem 0.8rem;
      `;
    }
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border: none;
  color: white;
  display: inline-block;
  border-radius: 1.8rem;
  background-color: ${(props) => props.color};
  ${(props) => getSize(props)}
  ${(props) =>
    props.hover === 'opacity' &&
    css`
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
    `}
`;
