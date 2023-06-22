import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  width: calc(100% / 3);
  /* margin: 1rem; */
  background-color: lightblue;
  padding: 2rem;
  /* flex-grow: 1; */

  @media screen and (max-width: 986px) {
    width: calc(100% / 2);
    /* height: 40rem; */
  }
  @media screen and (max-width: 768px) {
    width: calc(100%);
    /* height: 50rem; */
  }
`;
