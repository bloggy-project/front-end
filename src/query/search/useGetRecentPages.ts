import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecentPages, getPopularPages } from '../../lib/api/search';
import { GetRecentPages, GetPopularPages } from '../key';
import { Pages } from '@/lib/types/pages';
import { OptionTheme } from '@/assets/keyword';

const useGetUserProfileList = (optionTheme: string, option: string) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey:
        optionTheme === OptionTheme[0].name
          ? [GetRecentPages]
          : [GetPopularPages],
      queryFn:
        optionTheme === OptionTheme[0].name
          ? async ({ pageParam = null }) => getRecentPages(pageParam)
          : async ({
              pageParam = {
                lastId: null,
                favoriteCount: 0,
                date: option,
              },
            }) => getPopularPages(pageParam),
      getNextPageParam:
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
