import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecentPages } from '../../lib/api/search/recent';
import { GetRecentPages } from '../key';
import { Pages } from '@/lib/types/pages';

const useGetUserProfileList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [GetRecentPages],
      queryFn: async ({ pageParam = null }) => getRecentPages(pageParam),
      getNextPageParam: (lastpage: Pages) => {
        const lastItem = lastpage.content[lastpage.content.length - 1];
        const { postId } = lastItem;
        if (!lastpage.last) return postId;
        else return undefined;
      },
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
      retry: false,
      onError: (error: Error) => {
        console.log(error.message);
      },
    });

  return {
    pageDatas: data?.pages,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};

export default useGetUserProfileList;
