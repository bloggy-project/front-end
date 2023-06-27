import { create } from 'zustand';

type modalState = {
  isOpenModal: boolean;
  setToggleModal: () => void;
};

const modalStore = create<modalState>()((set) => ({
  isOpenModal: false,
  setToggleModal: () =>
    set((state) => ({
      isOpenModal: !state.isOpenModal,
    })),
}));

export default modalStore;
