import { StatusToken } from '@/assets/status';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type authState = {
  accessToken: string | null;
  setAccessToken: (value: string | null) => void;
};

const authStore = create<authState>()(
  devtools((set) => ({
    accessToken: StatusToken.Initial,
    setAccessToken: (value) =>
      set({
        accessToken: value,
      }),
  })),
);

export default authStore;
