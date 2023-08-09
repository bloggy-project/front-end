import { Post, TempPost } from '@/lib/types/post';
import { apiPrivate } from '../config';

export const uploadPost = async (post: Post) => {
  await apiPrivate.post('/posts', post);
};

export const getTempPost = async () => {
  const { data } = await apiPrivate.get<TempPost>('/temp-posts');
  return data;
};

export const uploadTempPost = async (tempPost: TempPost) => {
  await apiPrivate.post('/temp-posts', tempPost);
};
