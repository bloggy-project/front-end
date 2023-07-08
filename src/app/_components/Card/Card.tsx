import useGetUserProfileList from '@/query/search/useGetRecentPages';
import { StyledCard } from './Card-Styled';
import Content from '../CardContent/Content';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import EmptyContent from '@/app/_components/CardContent/EmptyCard';
import LoadingCard from '@/components/Loading/LoadingCard';

type CardProps = {
  theme: string;
  optionTheme: string;
  option: string;
};

const Card = ({ theme, optionTheme, option }: CardProps) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });
  const {
    pageDatas,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetUserProfileList(optionTheme, option);

  const hasNoContent = pageDatas?.some((data) => data.content.length < 1);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  //블로거 검색 기능 추가 시 수정
  if (theme === '블로거' || hasNoContent) {
    return <EmptyContent contentTheme={theme} />;
  }

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <>
      {pageDatas?.map((pages) =>
        pages.content.map((data) => (
          <StyledCard key={data.postId}>
            <Content data={data} />
          </StyledCard>
        )),
      )}
      {hasNextPage && <div ref={inViewRef}></div>}
      {isFetchingNextPage ? <p>불러오는 중...</p> : null}
    </>
  );
};

export default Card;
