import Image from 'next/image';
import { StyledThumbnailContainer } from './UserThumbnail-Styled';
import useThumbnail from '@/hooks/useThumbnail';
import { ImageSizesProps } from '@/assets/size';

type UserThumbnailProps = {
  thumbnail: string | null;
  name: string;
};

const UserThumbnail = ({ thumbnail, name }: UserThumbnailProps) => {
  const { thumbnailImg } = useThumbnail(thumbnail);
  return (
    <StyledThumbnailContainer>
      <Image
        src={thumbnailImg}
        alt={name}
        fill
        sizes={ImageSizesProps.default}
      />
    </StyledThumbnailContainer>
  );
};

export default UserThumbnail;
