import Image from 'next/image';
import { StyledThumbnailContainer } from './UserThumbnail-Styled';
import useThumbnail from '@/hooks/useThumbnail';
import { ImageSizesProps } from '@/assets/size';
import useGetUserInfo from '@/query/userinfo/useGetUserInfo';

const UserThumbnail = () => {
  const { userInfo } = useGetUserInfo();
  const { thumbnailImg } = useThumbnail(userInfo.thumbnail);

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
