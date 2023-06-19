import ModalWrapper from './ModalWrapper';
import { StyledModal } from './Modal-Styled';

type ModalProps = {
  isOpen: boolean;
  onChangeOpen: () => void;
};

const Modal = ({ isOpen, onChangeOpen }: ModalProps) => {
  const onlyToggledInWrapper = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) {
      return;
    } else {
      onChangeOpen();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper onClick={onlyToggledInWrapper}>
          <StyledModal data-testid="modal">모달</StyledModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
