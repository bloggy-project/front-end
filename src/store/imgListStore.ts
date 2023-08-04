import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type imgListState = {
  imgList: string[];
  clearImgList: () => void;
  addImgList: (img: string) => void;
};

const imgListStore = create<imgListState>()(
  devtools((set) => ({
    imgList: [],
    addImgList: (img: string) => {
      set((state) => ({ imgList: [...state.imgList, img] }));
    },
    clearImgList: () => {
      set(() => ({ imgList: [] }));
    },
  })),
);

export default imgListStore;
