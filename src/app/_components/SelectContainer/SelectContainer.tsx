'use client';
import SelectTheme from '../SelectTheme/SelectTheme';
import SelectOptions from '../SelectSearch/SelectSearchContainer';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';
import styled from 'styled-components';

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100rem;
`;

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
      <div //테스트 용 div
        style={{ fontSize: '15px', display: 'flex', width: '500px' }}
      >{`/search?q=${searched}&theme=${theme}&option=${option}&page=1`}</div>
    </StyledSelectContainer>
  );
};

export default SelectContainer;
