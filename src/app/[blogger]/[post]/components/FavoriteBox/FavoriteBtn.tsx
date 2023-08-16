import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { StyledFavoriteBtnContainer } from './FavoriteBtn-Styled';

type FavoriteBtnProps = {
  isFavorite: boolean;
};

const FavoriteBtn = ({ isFavorite }: FavoriteBtnProps) => {
  return (
    <StyledFavoriteBtnContainer>
      {isFavorite ? (
        <MdFavoriteBorder />
      ) : (
        <MdFavorite style={{ color: 'red' }} />
      )}
    </StyledFavoriteBtnContainer>
  );
};

export default FavoriteBtn;
