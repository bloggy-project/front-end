'use client';
import {
  StyledTabButtonContainer,
  StyledTabButton,
} from './SelectTheme-Styled';
import { TABS as tabs } from '@/assets/keyword';
import { memo } from 'react';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const SelectTheme = () => {
  const { theme, setTheme } = selectKeywordStore(
    (state) => ({ theme: state.theme, setTheme: state.setTheme }),
    shallow,
  );

  console.log('theme', theme);

  return (
    <StyledTabButtonContainer>
      {tabs.map((tab) => (
        <StyledTabButton
          key={tab.id + tab.label}
          onClick={() => setTheme(tab.label)}
          active={theme === tab.label ? 'active' : 'deactive'}
        >
          {tab.label}
        </StyledTabButton>
      ))}
    </StyledTabButtonContainer>
  );
};

export default memo(SelectTheme);
