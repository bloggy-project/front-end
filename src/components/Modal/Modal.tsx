'use client';
import ModalWrapper from './ModalWrapper';
import { StyledModal } from './Modal-Styled';
import AuthTheme from '../ModalContent/ModalContent';
import modalStore from '@/store/modalStore';

const Modal = () => {
  const isOpenModal = modalStore((state) => state.isOpenModal);

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
