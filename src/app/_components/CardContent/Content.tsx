import {
  StyledImgContainer,
  StyledContent,
  StyledDetails,
  StyledDetailsH3,
  StyledDetailsP,
  StyledInfo,
  StyledSubInfo1,
  StyledSubInfo2,
  StyledInfoText,
  StyledInfoSpace,
} from './Content-Styled';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa';
import Image from 'next/image';
import { Content } from '@/lib/types/pages';
import { ImageSizesProps } from '@/assets/size';
import { convertDateToDays } from '@/lib/handler/handleDateTime';

type ContentProps = {
  data: Content;
};

const Content = ({ data }: ContentProps) => {
  const cuttedDateTime = convertDateToDays(data.createdAt);

  return (
    <StyledContent>
      <StyledImgContainer>
        <Image
          src={data.thumbnail ? data.thumbnail : '/no-image.jpg'}
          alt={data.title}
          fill
          sizes={ImageSizesProps.default}
          priority
        />
      </StyledImgContainer>
      <StyledDetails>
        <StyledDetailsH3>{data.title}</StyledDetailsH3>
        <StyledDetailsP>{data.subContent}</StyledDetailsP>
      </StyledDetails>

      <StyledInfo>
        <StyledSubInfo1>
          <StyledInfoText>{cuttedDateTime}</StyledInfoText>
          <StyledInfoSpace> | </StyledInfoSpace>
          <StyledInfoText>{data.username}</StyledInfoText>
        </StyledSubInfo1>
        <StyledSubInfo2>
          <FaRegCommentDots />
          {data.commentCount}
          <FaHeart />
          {data.favoriteCount}
        </StyledSubInfo2>
      </StyledInfo>
    </StyledContent>
  );
};

export default Content;
