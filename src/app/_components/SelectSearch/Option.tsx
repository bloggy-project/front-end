'use client';
import { OPTIONS as options } from '@/assets/keyword';
import { ChangeEvent, memo } from 'react';
import { StyledOption, StyledSelect } from './Options-Styled';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const Option = () => {
  const { option, setOption } = selectKeywordStore(
    (state) => ({ option: state.option, setOption: state.setOption }),
    shallow,
  );

  const onChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOption(value);
  };

  return (
    <StyledSelect value={option} onChange={(e) => onChangeOption(e)}>
      {options.map((option, index) => (
        <StyledOption key={option.name + index} value={option.value}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default memo(Option);
