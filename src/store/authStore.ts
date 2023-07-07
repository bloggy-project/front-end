import { StatusToken } from '@/assets/status';
import MyLocalStorage from '@/lib/handler/handleLocalStorage';
import { UserInfo } from '@/lib/types/auth';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type authState = {
  accessToken: string | null;
  userInfo: UserInfo;
  setAccessToken: (value: string) => void;
  setUserInfo: (value: UserInfo) => void;
};

const storageName = 'userinfo';

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
      new MyLocalStorage<UserInfo>(storageName).set(value)
    ),
  })),
);

export default authStore;
