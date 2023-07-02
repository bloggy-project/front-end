import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type authState = {
  accessToken: string;
  setAccessToken: () => void;
  userInfo: {
    thumbnail: string;
  };
};

const authStore = create<authState>()(
  devtools((set) => ({
    accessToken: '',
    userInfo: {
      thumbnail: '',
    },
    setAccessToken: () =>
      set((state) => ({
        accessToken: state.accessToken,
      })),
  })),
);

export default authStore;
