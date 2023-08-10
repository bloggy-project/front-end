import { StatusToken } from '@/assets/status';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type authState = {
  accessToken: string | null;
  setAccessToken: (value: string | null) => void;
  clearAccessToken: () => void;
};

const authStore = create<authState>()(
  devtools((set) => ({
    accessToken: StatusToken.Initial,
    setAccessToken: (value) =>
      set({
        accessToken: value,
      }),
    clearAccessToken: () =>
      set(() => ({
        accessToken: StatusToken.No_token,
      })),
  })),
);

export default authStore;
