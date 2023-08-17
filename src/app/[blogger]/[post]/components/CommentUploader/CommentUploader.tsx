import { StyledTextarea } from '@/components/Form/Form-Styled';
import {
  StyledCommentUploaderContainer,
  StyledBoxContainer,
} from './CommentUploader-Styled';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import { ID_ViewScroll } from '@/assets/css_id';

const CommentUploader = () => {
  return (
    <StyledCommentUploaderContainer id={ID_ViewScroll}>
      <StyledTextarea height="10rem" />
      <StyledBoxContainer>
        <Button
          color={Palette.NATURAL}
          hover={'opacity'}
          size={'md'}
          content={'등록'}
        />
      </StyledBoxContainer>
    </StyledCommentUploaderContainer>
  );
};

export default CommentUploader;
