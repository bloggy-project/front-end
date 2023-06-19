import Option from './Option';
import Search from './Search';
import styled from 'styled-components';

const StyledSelectSearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 40rem;
  margin-top: 1.8rem;
`;

const SelectSearchContainer = () => {
  return (
    <StyledSelectSearchContainer>
      <Option />
      <Search />
    </StyledSelectSearchContainer>
  );
};

export default SelectSearchContainer;
