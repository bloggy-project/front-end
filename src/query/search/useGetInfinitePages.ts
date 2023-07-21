import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecentPages, getPopularPages } from '../../lib/api/search';
import QueryKey from '../key';
import { Pages } from '@/lib/types/pages';
import { OptionTheme } from '@/assets/keyword';

const useGetInfinitePages = (optionTheme: string, option: string) => {
  const optionalQueryKey =
    optionTheme === OptionTheme[0].name
      ? [QueryKey.GetRecentPages]
      : [QueryKey.GetPopularPages];
  const optionalQueryFn =
    optionTheme === OptionTheme[0].name
      ? async ({ pageParam = null }) => getRecentPages(pageParam)
      : async ({
          pageParam = {
            lastId: null,
            favoriteCount: 0,
            date: option,
          },
        }) => getPopularPages(pageParam);
  const optionalGetNextPageParam =
    optionTheme === OptionTheme[0].name
      ? (lastpage: Pages) => {
          const lastItem = lastpage.content[lastpage.content.length - 1];
          const postId = lastItem?.postId ?? null;
          if (!lastpage?.last) return postId;
          else return false;
        }
      : (lastpage: Pages) => {
          const lastItem = lastpage.content[lastpage.content.length - 1];
          const postId = lastItem?.postId ?? null;
          const favoriteCount = lastItem?.favoriteCount ?? null;
          if (!lastpage.last)
            return {
              lastId: postId,
              favoriteCount: favoriteCount,
              date: option,
            };
          else return false;
        };

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: optionalQueryKey,
      queryFn: optionalQueryFn,
      getNextPageParam: optionalGetNextPageParam,
      onError: (error: Error) => {
        console.log(error.message);
      },
      // onSuccess: (data: InfiniteData<Pages>) => {
      //   console.log('data', data.pages[0].content.length);
      //   const name = 'contentLen';
      //   const contentStorage = new MyLocalStorage<number>(name);
      //   contentStorage.set(data.pages[0].content.length);
      // }, 최초 성공 후 데이터 길이 브라우저에 저장
    });

  return {
    pageDatas: data?.pages,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};

export default useGetInfinitePages;
