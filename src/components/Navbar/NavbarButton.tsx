import Button from '@/components/Button/Button';
import { PALETTE } from '@/assets/color';
import Modal from '@/components/Modal/Modal';
import useModal from '@/hooks/useModal';

const NavbarButton = () => {
  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <Button
        onClick={toggleModal}
        hover={'opacity'}
        size={'sm'}
        color={PALETTE.SPOT1}
        content={'로그인 / 회원가입'}
      />
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};

export default NavbarButton;
