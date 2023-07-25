import { UserInfo } from '@/lib/types/auth';
import { apiPrivate } from '../config';

export const getUserInfo = async () => {
  const { data } = await apiPrivate.get<UserInfo>('/userinfo');
  return data;
};

export const changeUserInfo = async (newUserInfo: Partial<UserInfo>) => {
  await apiPrivate.patch('/userinfo', newUserInfo);
};
