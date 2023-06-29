import useGetUserProfileList from '@/query/search/useGetRecentPages';
import { StyledCard } from './Card-Styled';
import Content from './Content';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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
  } = useGetUserProfileList();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
