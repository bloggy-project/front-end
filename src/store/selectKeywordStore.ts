import { create } from 'zustand';
import { Theme, Options, OptionTheme } from '@/assets/keyword';
import { devtools } from 'zustand/middleware';

type KeywordState = {
  theme: string;
  option: string;
  optionTheme: string;
  searched: string;
  setTheme: (value: string) => void;
  setOptionTheme: (value: string) => void;
  setOption: (value: string) => void;
  setSearched: (value: string) => void;
};

const selectKeywordStore = create<KeywordState>()(
  devtools((set) => ({
    theme: Theme[0].label,
    option: Options[0].value,
    optionTheme: OptionTheme[0].name,
    searched: '',
    setTheme: (value) =>
      set({
        theme: value,
      }),
    setOptionTheme: (value) =>
      set({
        optionTheme: value,
      }),
    setOption: (value) =>
      set({
        option: value,
      }),
    setSearched: (value) =>
      set({
        searched: value,
      }),
  })),
);

export default selectKeywordStore;
