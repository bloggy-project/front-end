import { Post } from '@/lib/types/post';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type postState = {
  post: Post;
  setPost: (value: Partial<Post>) => void;
  clearPost: () => void;
};

const postStore = create<postState>()(
  devtools((set) => ({
    post: {
      thumbnail: '',
      title: '',
      content: '',
      subContent: '',
      tagNames: [],
    },
    setPost: (value) =>
      set((state) => ({
        post: {
          ...state.post,
          ...value,
        },
      })),
    clearPost: () =>
      set(() => ({
        post: {
          thumbnail: '',
          title: '',
          content: '',
          subContent: '',
          tagNames: [],
        },
      })),
  })),
);

export default postStore;
