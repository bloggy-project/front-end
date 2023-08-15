import styled, { css } from 'styled-components';

type StyledButtonProps = {
  color?: string;
  hover: 'none' | 'opacity';
  size: 'sm' | 'md' | 'lg' | 'modal' | 'half' | 'comb';
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
    case 'modal': {
      return css`
        font-size: 1.8rem;
        font-weight: 700;
        padding: 0.8rem 1rem;
        width: 100%;
        border-radius: 10px;
      `;
    }
    case 'half': {
      return css`
        font-size: 1.4rem;
        font-weight: 600;
        padding: 0.8rem 1rem;
        width: 50%;
        border-radius: 0;
      `;
    }
    case 'comb': {
      return css`
        font-size: 1.4rem;
        font-weight: 600;
        padding: 1rem 1rem;
        border-radius: 10px;
      `;
    }
    default: {
      return css`
        font-size: 1.6rem;
        font-weight: 600;
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

type StyledSubBtnBoxProps = {
  display?: string;
  direction?: string;
  align?: string;
  justify?: string;
  color?: string;
};

export const StyledSubBtnBox = styled.div<StyledSubBtnBoxProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  background-color: ${(props) => props.color};
`;

type StyledBtnSpaceProps = {
  marginLR: string;
};

export const StyledBtnSpace = styled.div<StyledBtnSpaceProps>`
  margin-left: ${(props) => props.marginLR};
  margin-right: ${(props) => props.marginLR};
`;
