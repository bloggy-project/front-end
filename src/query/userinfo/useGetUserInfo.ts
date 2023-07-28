import { getUserInfo } from '@/lib/api/userinfo';
import { useQuery } from '@tanstack/react-query';
import QueryKey from '../key';
import { MsgAlert } from '@/assets/message';

const useGetUserInfo = (accessToken: string | null) => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: [QueryKey.UserInfo],
    queryFn: () => getUserInfo(accessToken),
    enabled: accessToken ? true : false,
    onError: () => {
      alert(MsgAlert.Userinfo.notExist);
    },
  });

  return {
    userInfo: data,
    verifyErr: isError,
    isLoading,
    refetch,
  };
};

export default useGetUserInfo;
