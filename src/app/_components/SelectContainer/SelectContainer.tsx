'use client';
import SelectTheme from '../SelectTheme/SelectTheme';
import SelectOptions from '../SelectSearch/SelectSearchContainer';
import { StyledSelectContainer } from './SelectContainer-Styled';

const SelectContainer = () => {
  return (
    <StyledSelectContainer>
      <SelectTheme />
      <SelectOptions />
    </StyledSelectContainer>
  );
};

export default SelectContainer;
