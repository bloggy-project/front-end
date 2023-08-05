'use client';

import { StyledMain } from './Main-Styled';
import Card from '../Card/Card';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const Main = () => {
  const { theme, optionTheme, option } = selectKeywordStore(
    (state) => ({
      theme: state.theme,
      optionTheme: state.optionTheme,
      option: state.option,
    }),
    shallow,
  );

  return (
    <StyledMain>
      <Card theme={theme} optionTheme={optionTheme} option={option} />
    </StyledMain>
  );
};

export default Main;
