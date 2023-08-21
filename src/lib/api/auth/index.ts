import { apiPrivate, api } from '../config';
import { joinProps } from '@/lib/types/auth';

export const onJoin = async ({ email, name, password }: joinProps) => {
  await api.post('/users', { email: email, password: password, name: name });
};

export const onLogin = async (email: string, password: string) => {
  await apiPrivate.post('/login', {
    email: email,
    password: password,
  });
};

export const onLogout = async () => {
  await apiPrivate.post('/logout');
};

export const checkUserName = async (name: string) => {
  await api.get(`/users/check/${name}`);
};
