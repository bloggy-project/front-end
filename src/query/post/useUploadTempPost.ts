import { useMutation, useQueryClient } from '@tanstack/react-query';
import QueryKey from '../key';
import { TempPost } from '@/lib/types/post';
import { uploadTempPost } from '@/lib/api/post';

const useUploadTempPost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (tempPost: TempPost) => uploadTempPost(tempPost),
    onMutate: async (tempPost) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: [QueryKey.TempPost] });

      // Snapshot the previous value
      const previousTempPost = queryClient.getQueryData<TempPost>([
        QueryKey.TempPost,
      ]);

      queryClient.setQueryData<TempPost>(
        [QueryKey.TempPost],
        (old) =>
          old && {
            ...old,
            tempPost,
          },
      );

      // Return a context object with the snapshotted value
      return { previousTempPost, tempPost };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData([QueryKey.TempPost], context?.previousTempPost);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.TempPost] });
    },
  });

  return mutation;
};

export default useUploadTempPost;
