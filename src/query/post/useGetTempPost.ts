import { useQuery } from '@tanstack/react-query';
import QueryKey from '../key';
import { getTempPost } from '@/lib/api/post';
import imageListStore from '@/store/imageListStore';
import authStore from '@/store/authStore';

const useGetTempPost = () => {
  const setImgList = imageListStore((state) => state.setImgList);
  const accessToken = authStore((state) => state.accessToken);
  const { data } = useQuery({
    queryKey: [QueryKey.TempPost],
    enabled: accessToken ? true : false,
    queryFn: getTempPost,
    onSuccess: (data) => {
      setImgList(data.imageList);
    },
  });
  return {
    tempPost: data,
  };
};

export default useGetTempPost;
