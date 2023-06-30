'use client';

import { StyledMain } from './Main-Styled';
import Card from '../Card/Card';
import { Tabs } from '@/assets/keyword';
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
      {theme === Tabs[0].label ? (
        <Card optionTheme={optionTheme} option={option} />
      ) : (
        <p>블로거</p>
      )}
    </StyledMain>
  );
};

export default Main;
