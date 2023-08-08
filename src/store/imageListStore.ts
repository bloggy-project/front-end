import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type imageListState = {
  imageList: string[];
  clearImgList: () => void;
  addImgList: (img: string) => void;
  setImgList: (imgList: string[]) => void;
};

const imageListStore = create<imageListState>()(
  devtools((set) => ({
    imageList: [],
    addImgList: (img: string) => {
      set((state) => ({ imageList: [...state.imageList, img] }));
    },
    setImgList: (imgList: string[]) => {
      set(() => ({ imageList: imgList }));
    },
    clearImgList: () => {
      set(() => ({ imageList: [] }));
    },
  })),
);

export default imageListStore;
