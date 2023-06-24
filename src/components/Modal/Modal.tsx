import ModalWrapper from './ModalWrapper';
import { StyledModal } from './Modal-Styled';
import { useEffect } from 'react';
import AuthTheme from '../ModalContent/ModalContent';

type ModalProps = {
  isOpen: boolean;
  onChangeOpen: () => void;
};

const Modal = ({ isOpen, onChangeOpen }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const openModal = () => {
        document.body.style.overflow = 'hidden'; // Disable body scrolling
      };
      openModal();
    } else {
      const closeModal = () => {
        document.body.style.overflow = 'auto'; // Enable body scrolling
      };
      closeModal();
    }
  }, [isOpen]);

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
          <StyledModal data-testid="modal">
            <AuthTheme />
          </StyledModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
