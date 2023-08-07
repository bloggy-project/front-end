import useDisable from '@/hooks/useDisable';
import { StyledBtnContainer } from '../ModalEditorContent/ModalEditorContent-Styled';
import CancelThumbImg from './CancelThumbImg';
import PickImgList from './PickImgList';
import SetNewThumbImg from './SetNewThumbImg';
import { StyledThumbImgEditorContainer } from './ThumbImgEditor-Styled';

const ThumbImgEditor = () => {
  const { isDisable, onDisable, notDisable } = useDisable();
  return (
    <StyledThumbImgEditorContainer>
      <PickImgList isDisable={isDisable} />
      <StyledBtnContainer>
        <CancelThumbImg isDisable={isDisable} />
        <SetNewThumbImg
          isDisable={isDisable}
          onDisable={onDisable}
          notDisable={notDisable}
        />
      </StyledBtnContainer>
    </StyledThumbImgEditorContainer>
  );
};
export default ThumbImgEditor;
