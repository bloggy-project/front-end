import {
  StyledScrollBtn,
  StyledScrollBtnContainer,
} from './ScrollButton-Styled';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { ID_ViewScroll } from '@/assets/css_id';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToComment = () => {
    const commentBox = document.getElementById(ID_ViewScroll);
    if (commentBox) {
      commentBox.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledScrollBtnContainer>
      <StyledScrollBtn type="button" onClick={scrollToTop}>
        <BsChevronUp />
      </StyledScrollBtn>
      <StyledScrollBtn type="button" onClick={scrollToComment}>
        <BsChevronDown />
      </StyledScrollBtn>
    </StyledScrollBtnContainer>
  );
};

export default ScrollButton;
