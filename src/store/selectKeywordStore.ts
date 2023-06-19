import { create } from 'zustand';
import { TABS as tabs, OPTIONS as options } from '@/assets/keyword';

type KeywordState = {
  theme: string;
  option: string;
  searched: string;
  setTheme: (value: string) => void;
  setOption: (value: string) => void;
  setSearched: (value: string) => void;
};

const selectKeywordStore = create<KeywordState>()((set) => ({
  theme: tabs[0].label,
  option: options[0].value,
  searched: '',
  setTheme: (value) =>
    set({
      theme: value,
    }),
  setOption: (value) =>
    set({
      option: value,
    }),
  setSearched: (value) =>
    set({
      searched: value,
    }),
}));

export default selectKeywordStore;
