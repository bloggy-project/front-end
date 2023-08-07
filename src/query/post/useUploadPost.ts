import { useMutation, useQueryClient } from '@tanstack/react-query';
import QueryKey from '../key';
import { Post } from '@/lib/types/post';
import { uploadPost } from '@/lib/api/post';

const useUploadPost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (post: Post) => uploadPost(post),
    onMutate: async (post) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: [QueryKey.Post] });

      // Snapshot the previous value
      const previousPost = queryClient.getQueryData<Post>([QueryKey.Post]);

      // Optimistically update to the new value
      queryClient.setQueryData<Post>(
        [QueryKey.Post],
        (old) =>
          old && {
            ...old,
            post,
          },
      );

      // Return a context object with the snapshotted value
      return { previousPost, post };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData([QueryKey.Post], context?.previousPost);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.Post] });
      //새 게시글 추가 후 페이지네이션 데이터 다시 요청
      queryClient.resetQueries({ queryKey: [QueryKey.GetRecentPages] });
    },
  });

  return mutation;
};

export default useUploadPost;
