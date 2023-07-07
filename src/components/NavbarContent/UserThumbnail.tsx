import Image from 'next/image';
import { StyledThumbnailContainer } from './StyledUserThumbnail';

type UserThumbnailProps = {
  thumbnail: string;
  name: string;
};

const UserThumbnail = ({ thumbnail, name }: UserThumbnailProps) => {
  return (
    <StyledThumbnailContainer>
      <Image
        src={
          'https://dzbnjlxurlvs4.cloudfront.net/thumb/%EC%86%90%ED%9D%A5%EB%AF%BC.jpg?h=50&w=50'
        }
        alt={name}
        fill
      />
    </StyledThumbnailContainer>
  );
};

export default UserThumbnail;
