import styled, { css } from 'styled-components';

type StyledButtonProps = {
  color?: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg';
};

const getSize = ({ size = 'md' }) => {
  switch (size) {
    case 'sm': {
      return css`
        font-size: 12px;
        padding: 6px 12px;
      `;
    }
    case 'lg': {
      return css`
        font-size: 16px;
        padding: 10px 16px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 8px 14px;
      `;
    }
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border: none;
  color: white;
  display: inline-block;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  ${(props) => getSize(props)}
  ${(props) =>
    props.hover === 'opacity' &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`;
