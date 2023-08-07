import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type modalState = {
  isOpenModal: boolean;
  isOpenModalEditor: boolean;
  setToggleModal: () => void;
  setToggleModalEditor: () => void;
};

const modalStore = create<modalState>()(
  devtools((set) => ({
    isOpenModal: false,
    isOpenModalEditor: false,
    setToggleModal: () =>
      set((state) => ({
        isOpenModal: !state.isOpenModal,
      })),
    setToggleModalEditor: () =>
      set((state) => ({
        isOpenModalEditor: !state.isOpenModalEditor,
      })),
  })),
);

export default modalStore;
