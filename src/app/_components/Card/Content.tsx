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

const Content = () => {
  return (
    <StyledContent>
      <StyledImgContainer>
        <img
          src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202301/26/NEWS1/20230126173028141pwuj.jpg"
          alt="test"
        />
      </StyledImgContainer>

      <StyledDetails>
        <StyledDetailsH3>2023년, 카드 테스트</StyledDetailsH3>
        <StyledDetailsP>
          안녕하세요 지금부터 놀라운 이야기를 해보려고 합니다. 잘 들어주십시오.
          안녕하세요 지금부터 놀라운 이야기를 해보려고 합니다. 잘 들어주십시오.
        </StyledDetailsP>
      </StyledDetails>

      <StyledInfo>
        <StyledSubInfo1>
          <span>2023.06.22</span>
          <span> | </span>
          <span>김현율</span>
        </StyledSubInfo1>
        <StyledSubInfo2>
          <FaRegCommentDots />4
          <FaHeart />2
        </StyledSubInfo2>
      </StyledInfo>
    </StyledContent>
  );
};

export default Content;
