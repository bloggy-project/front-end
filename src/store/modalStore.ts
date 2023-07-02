import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type modalState = {
  isOpenModal: boolean;
  setToggleModal: () => void;
};

const modalStore = create<modalState>()(
  devtools((set) => ({
    isOpenModal: false,
    setToggleModal: () =>
      set((state) => ({
        isOpenModal: !state.isOpenModal,
      })),
  })),
);

export default modalStore;
