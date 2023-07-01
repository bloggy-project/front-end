import { apiPrivate } from '../config/private';
import { api } from '../config/public';
import { joinProps } from '@/lib/types/auth';

export const onJoin = async ({ email, name, password }: joinProps) => {
  try {
    await api.post('/users', { email: email, password: password, name: name });
    alert('회원가입이 완료되었습니다');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
};

export const onLogin = async (email: string, password: string) => {
  try {
    await apiPrivate.post('/login', { email: email, password: password });
    alert('로그인에 성공했습니다');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
};

export const checkUserName = async (name: string) => {
  await api.get(`/users/check/${name}`);
};
