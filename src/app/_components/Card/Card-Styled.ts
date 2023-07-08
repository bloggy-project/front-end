import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  width: calc(100% / 3);
  padding: 1.5rem;
  @media screen and (max-width: 986px) {
    width: calc(100% / 2);
  }
  @media screen and (max-width: 768px) {
    width: calc(100%);
  }
`;
