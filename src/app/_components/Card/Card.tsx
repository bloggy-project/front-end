import useGetUserProfileList from '@/query/search/useGetRecentPages';
import { StyledCard } from './Card-Styled';
import Content from '../CardContent/Content';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import EmptyContent from '@/app/_components/CardContent/EmptyContent';

type CardProps = {
  optionTheme: string;
  option: string;
};

const Card = ({ optionTheme, option }: CardProps) => {
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

  if (hasNoContent) {
    return <EmptyContent />;
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
