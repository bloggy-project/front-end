import {
  StyledImgContainer,
  StyledContent,
  StyledDetails,
  StyledDetailsH3,
  StyledDetailsP,
  StyledInfo,
  StyledSubInfo1,
  StyledSubInfo2,
} from './Content-Styled';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa';
import Image from 'next/image';
import { Content } from '@/lib/types/pages';

type ContentProps = {
  data: Content;
};

const Content = ({ data }: ContentProps) => {
  const createdDate = data.createdAt.split('T')[0];
  // const year = data.createdAt.getFullYear();
  // const month = data.createdAt.getMonth();
  // const day= data.createdAt.getDay();
  return (
    <StyledContent>
      <StyledImgContainer>
        <img src={data.thumbnail} alt="test" />
      </StyledImgContainer>
      <span>{data.postId}</span>
      <StyledDetails>
        <StyledDetailsH3>{data.title}</StyledDetailsH3>
        <StyledDetailsP>{data.content}</StyledDetailsP>
      </StyledDetails>

      <StyledInfo>
        <StyledSubInfo1>
          <span>{createdDate}</span>
          <span> | </span>
          <span>{data.username}</span>
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
