import { Pages } from '@/lib/types/pages';
import { api } from '../config';

type getPopularPagesProps = {
  lastId: number | null;
  favoriteCount: number | null;
  date: string;
};

export const getRecentPages = async <T = Pages>(
  lastId: number | null,
): Promise<T> => {
  const url = lastId ? `/posts?lastId=${lastId}` : '/posts';
  const { data } = await api.get<T>(url);

  return data;
};

export const getPopularPages = async <T = Pages>({
  lastId,
  favoriteCount,
  date,
}: getPopularPagesProps): Promise<T> => {
  const url = lastId
    ? `/posts/popular?lastId=${lastId}&favorCount=${favoriteCount}&date=${date}`
    : '/posts/popular';
  const { data } = await api.get<T>(url);

  return data;
};
