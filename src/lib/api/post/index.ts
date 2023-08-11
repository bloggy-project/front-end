import { PostUpload, TempPost, PostGet } from '@/lib/types/post';
import { apiPrivate } from '../config';

export const uploadPost = async (post: PostUpload) => {
  await apiPrivate.post('/posts', post);
};

export const getTempPost = async () => {
  const { data } = await apiPrivate.get<TempPost>('/temp-posts');
  return data;
};

export const uploadTempPost = async (tempPost: TempPost) => {
  await apiPrivate.post('/temp-posts', tempPost);
};

export const getPost = async <T = PostGet>(postId: string) => {
  const { data } = await apiPrivate.get<T>(`/posts/${postId}`);
  return data;
};
