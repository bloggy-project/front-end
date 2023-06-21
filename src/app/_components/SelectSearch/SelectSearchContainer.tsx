import OptionTheme from './OptionTheme';
import Search from './Search';
import styled from 'styled-components';

const StyledSelectSearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 43rem;
  margin-top: 1.8rem;
`;

const SelectSearchContainer = () => {
  return (
    <StyledSelectSearchContainer>
      <OptionTheme />
      <Search />
    </StyledSelectSearchContainer>
  );
};

export default SelectSearchContainer;
