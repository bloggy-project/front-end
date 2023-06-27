import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import Modal from '@/components/Modal/Modal';
import modalStore from '@/store/modalStore';

const NavbarButton = () => {
  const setToggleModal = modalStore((state) => state.setToggleModal);
  return (
    <>
      <Button
        onClick={setToggleModal}
        hover={'opacity'}
        size={'sm'}
        color={Palette.SPOT1}
        content={'로그인 / 회원가입'}
      />
      <Modal />
    </>
  );
};

export default NavbarButton;
