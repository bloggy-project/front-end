import ModalWrapper from './ModalWrapper';
import { StyledModal } from './Modal-Styled';
import { useEffect } from 'react';
import AuthTheme from '../ModalContent/ModalContent';
import modalStore from '@/store/modalStore';

const Modal = () => {
  const isOpenModal = modalStore((state) => state.isOpenModal);

  useEffect(() => {
    if (isOpenModal) {
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
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <ModalWrapper>
          <StyledModal data-testid="modal">
            <AuthTheme />
          </StyledModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
