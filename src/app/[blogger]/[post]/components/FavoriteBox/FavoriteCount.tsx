import FavoriteBtn from './FavoriteBtn';
import {
  StyledFavoriteBoxContainer,
  StyledFavoriteBox,
  StyledFavoriteText,
} from './FavoriteCount-Styled';

type FavoriteCountProps = {
  isFavorite: boolean;
  favoriteCount: number;
};

const FavoriteBox = ({ isFavorite, favoriteCount }: FavoriteCountProps) => {
  return (
    <StyledFavoriteBoxContainer>
      <StyledFavoriteBox>
        <FavoriteBtn isFavorite={isFavorite} />
        <StyledFavoriteText>{favoriteCount}</StyledFavoriteText>
      </StyledFavoriteBox>
    </StyledFavoriteBoxContainer>
  );
};

export default FavoriteBox;
