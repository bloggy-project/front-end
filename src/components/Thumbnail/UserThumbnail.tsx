import Image from 'next/image';
import { StyledThumbnailContainer } from './UserThumbnail-Styled';
import { ImageSizesProps } from '@/assets/size';

type UserThumbnailProps = {
  thumbnailImg: string;
};

const UserThumbnail = ({ thumbnailImg }: UserThumbnailProps) => {
  return (
    <StyledThumbnailContainer>
      <Image
        src={thumbnailImg}
        alt={thumbnailImg}
        fill
        sizes={ImageSizesProps.default}
      />
    </StyledThumbnailContainer>
  );
};

export default UserThumbnail;
