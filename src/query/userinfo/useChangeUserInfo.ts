import { changeUserInfo } from '@/lib/api/userinfo';
import { UserInfo } from '@/lib/types/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QueryKey from '../key';

const useChangeUserInfo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newUserInfo: Partial<UserInfo>) => changeUserInfo(newUserInfo),
    onMutate: async (newUserInfo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: [QueryKey.UserInfo] });

      // Snapshot the previous value
      const previousUserInfo = queryClient.getQueryData<UserInfo>([
        QueryKey.UserInfo,
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData<UserInfo>(
        [QueryKey.UserInfo],
        (old) =>
          old && {
            ...old,
            newUserInfo,
          },
      );

      // Return a context object with the snapshotted value
      return { previousUserInfo, newUserInfo };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData([QueryKey.UserInfo], context?.previousUserInfo);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.UserInfo] });
    },
  });

  return mutation;
};

export default useChangeUserInfo;
