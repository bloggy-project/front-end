import { StyledCard } from '@/app/_components/Card/Card-Styled';
import { StyledLoadingContent } from './LoadingCard-Styled';

const LoadingArr = Array.from({ length: 15 });

const LoadingCard = () => {
  return (
    <>
      {LoadingArr.map((_, index) => (
        <StyledCard key={index}>
          <StyledLoadingContent></StyledLoadingContent>
        </StyledCard>
      ))}
    </>
  );
};

export default LoadingCard;
