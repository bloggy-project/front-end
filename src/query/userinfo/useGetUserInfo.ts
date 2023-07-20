import { getUserInfo } from '@/lib/api/userinfo';
import { useQuery } from '@tanstack/react-query';
import QueryKey from '../key';
import { UserInfo } from '@/lib/types/auth';

const useGetUserInfo = () => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: [QueryKey.UserInfo],
    queryFn: getUserInfo,
    retry: false,
    onError: () => {
      alert('해당 유저가 존재하지 않습니다. 다시 한 번 시도해주세요');
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
