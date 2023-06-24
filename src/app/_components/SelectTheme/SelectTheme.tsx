'use client';
import { StyledSelectTheme, StyledTabButton } from './SelectTheme-Styled';
import { Tabs } from '@/assets/keyword';
import { memo } from 'react';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const SelectTheme = () => {
  const { theme, setTheme } = selectKeywordStore(
    (state) => ({ theme: state.theme, setTheme: state.setTheme }),
    shallow,
  );

  return (
    <StyledSelectTheme>
      {Tabs.map((tab) => (
        <StyledTabButton
          key={tab.id + tab.label}
          onClick={() => setTheme(tab.label)}
          active={theme === tab.label ? 'active' : 'deactive'}
        >
          {tab.label}
        </StyledTabButton>
      ))}
    </StyledSelectTheme>
  );
};

export default memo(SelectTheme);
