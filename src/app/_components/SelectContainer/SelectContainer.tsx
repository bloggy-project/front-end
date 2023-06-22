'use client';
import SelectTheme from '../SelectTheme/SelectTheme';
import SelectOptions from '../SelectSearch/SelectSearchContainer';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';
import { StyledSelectContainer } from './SelectContainer-Styled';

const SelectContainer = () => {
  const { option, theme, searched } = selectKeywordStore(
    (state) => ({
      option: state.option,
      theme: state.theme,
      searched: state.searched,
    }),
    shallow,
  );
  return (
    <StyledSelectContainer>
      <SelectTheme />
      <SelectOptions />
    </StyledSelectContainer>
  );
};

export default SelectContainer;
