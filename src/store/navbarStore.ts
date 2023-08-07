import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type navbarState = {
  isNavBar: boolean;
  setToggleNavBar: () => void;
};

const navbarStore = create<navbarState>()(
  devtools((set) => ({
    isNavBar: true,
    setToggleNavBar: () =>
      set((state) => ({
        isNavBar: !state.isNavBar,
      })),
  })),
);

export default navbarStore;
