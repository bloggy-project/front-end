import { getUserInfo } from '@/lib/api/userinfo';
import { useQuery } from '@tanstack/react-query';
import QueryKey from '../key';
import { UserInfo } from '@/lib/types/auth';
import { MsgAlert } from '@/assets/message';

const useGetUserInfo = () => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: [QueryKey.UserInfo],
    queryFn: getUserInfo,
    retry: false,
    onError: () => {
      alert(MsgAlert.Userinfo.notExist);
    },
    onSuccess: (data) => {
      console.log('data', data);
    },
  });

  return {
    userInfo: data as UserInfo,
    verifyErr: isError,
    isLoading,
    refetch,
  };
};

export default useGetUserInfo;