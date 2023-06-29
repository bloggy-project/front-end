import { Pages } from '@/lib/types/pages';
import { api } from '../config/public';

export const getRecentPages = async <T = Pages>(
  lastId: number | null,
): Promise<T> => {
  const url = lastId !== null ? `/posts?lastId=${lastId}` : '/posts';
  const { data } = await api.get<T>(url);

  return data;
};
