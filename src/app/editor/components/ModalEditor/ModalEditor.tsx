import modalStore from '@/store/modalStore';
import { PostUpload } from '@/lib/types/post';
import ModalWrapper from '@/components/Modal/ModalWrapper';
import ModalEditorContent from '../ModalEditorContent/ModalEditorContent';
import useScrollOverflow from '@/hooks/useScrollOverflow';
import { StyledModalEditorContainer } from './ModalEditor-Styled';

type ModalEditor = {
  data: PostUpload;
};

const ModalEditor = () => {
  const isOpenModalEditor = modalStore((state) => state.isOpenModalEditor);
  useScrollOverflow(isOpenModalEditor);

  return (
    <>
      {isOpenModalEditor && (
        <ModalWrapper>
          <StyledModalEditorContainer>
            <ModalEditorContent />
          </StyledModalEditorContainer>
        </ModalWrapper>
      )}
    </>
  );
};

export default ModalEditor;
