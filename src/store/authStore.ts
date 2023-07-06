import { StatusToken } from '@/assets/status';
import { setLocalStorage } from '@/lib/handler/handleUserInfo';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type userInfo = {
  thumbnail: null | string;
  name: string;
  email: string;
};

type authState = {
  accessToken: string | null;
  userInfo: userInfo;
  setAccessToken: (value: string) => void;
  setUserInfo: (value: userInfo) => void;
};

const authStore = create<authState>()(
  devtools((set) => ({
    accessToken: StatusToken.Initial,
    userInfo: {
      thumbnail: '',
      name: '',
      email: '',
    },
    setAccessToken: (value) =>
      set({
        accessToken: value,
      }),
    setUserInfo: (value) => (
      set({
        userInfo: value,
      }),
      setLocalStorage<userInfo>(value, 'userinfo')
    ),
  })),
);

export default authStore;
