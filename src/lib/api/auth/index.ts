import { apiPrivate, api } from '../config';
import { joinProps, loginApi } from '@/lib/types/auth';

export const onJoin = async ({ email, name, password }: joinProps) => {
  try {
    await api.post('/users', { email: email, password: password, name: name });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
};

export const onLogin = async <T = loginApi>(
  email: string,
  password: string,
): Promise<T> => {
  const { data } = await apiPrivate.post<T>('/login', {
    email: email,
    password: password,
  });
  return data;
};

export const checkUserName = async (name: string) => {
  await api.get(`/users/check/${name}`);
};
