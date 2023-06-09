import styled, { css } from 'styled-components';

export type StyledTabButtonProps = {
  active: 'active' | 'deactive';
};

export const getActive = ({ active }: StyledTabButtonProps) => {
  switch (active) {
    case 'active': {
      return css`
        font-size: 3rem;
        padding: 1rem 3rem;
        color: black;
      `;
    }
    case 'deactive': {
      return css`
        font-size: 2rem;
        padding: 1rem 3rem;
        color: lightgray;
      `;
    }
  }
};

export const StyledTabButton = styled.button<StyledTabButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 600;
  ${(props) => getActive(props)}
`;

export const StyledSelectTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28rem;
  margin-top: 7rem;
`;
