import { Post } from '@/lib/types/post';
import { apiPrivate } from '../config';

export const uploadPost = async (post: Post) => {
  await apiPrivate.post('/posts', post);
};
