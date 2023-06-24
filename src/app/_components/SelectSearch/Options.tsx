'use client';
import { Options as options } from '@/assets/keyword';
import { forwardRef, MouseEvent } from 'react';
import { StyledOptions, StyledOptionLi } from './Options-Styled';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const Options = forwardRef<HTMLDivElement>(function Options(_props, ref) {
  const { option, setOption } = selectKeywordStore(
    (state) => ({ option: state.option, setOption: state.setOption }),
    shallow,
  );

  const onChangeOption = (e: MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute('value');
    if (value) {
      setOption(value);
    }
  };

  return (
    <StyledOptions ref={ref}>
      <ul>
        {options.map((options, index) => (
          <StyledOptionLi
            key={options.name + index}
            value={options.value}
            $selected={option === options.value}
            onClick={onChangeOption}
          >
            {options.name}
          </StyledOptionLi>
        ))}
      </ul>
    </StyledOptions>
  );
});

export default Options;
