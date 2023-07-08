import Image from 'next/image';
import { StyledThumbnailContainer } from '../NavbarContent/StyledUserThumbnail';
import useThumbnail from '@/hooks/useThumbnail';

type UserThumbnailProps = {
  thumbnail: string | null;
  name: string;
};

const UserThumbnail = ({ thumbnail, name }: UserThumbnailProps) => {
  const { thumbnailImg } = useThumbnail(thumbnail);
  return (
    <StyledThumbnailContainer>
      <Image src={thumbnailImg} alt={name} fill />
    </StyledThumbnailContainer>
  );
};

export default UserThumbnail;
