import { apiPrivate, api } from '../config';
import { joinProps, loginApi } from '@/lib/types/auth';

export const onJoin = async ({ email, name, password }: joinProps) => {
  await api.post('/users', { email: email, password: password, name: name });
};

export const onLogin = async <T = loginApi>(
  email: string,
  password: string,
) => {
  const { data } = await apiPrivate.post<T>('/login', {
    email: email,
    password: password,
  });
  return data;
};

export const onLogout = async () => {
  await apiPrivate.post('/logout');
};

export const checkUserName = async (name: string) => {
  await api.get(`/users/check/${name}`);
};
