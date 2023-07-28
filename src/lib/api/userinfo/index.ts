import { UserInfo } from '@/lib/types/auth';
import { apiPrivate } from '../config';

export const getUserInfo = async (accessToken: string | null) => {
  const { data } = await apiPrivate.get<UserInfo>('/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return data;
};

export const changeUserInfo = async (newUserInfo: Partial<UserInfo>) => {
  await apiPrivate.patch('/users', newUserInfo);
};
