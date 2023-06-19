import Button from '@/components/Button/Button';
import { PALETTE } from '@/assets/color';
import Modal from '@/components/Modal/Modal';
import useToggle from '@/hooks/useToggle';

const NavbarButton = () => {
  const { isOpen, onChangeOpen } = useToggle();
  return (
    <>
      <Button
        onClick={onChangeOpen}
        hover={'opacity'}
        size={'sm'}
        color={PALETTE.SPOT1}
        content={'로그인 / 회원가입'}
      />
      <Modal isOpen={isOpen} onChangeOpen={onChangeOpen} />
    </>
  );
};

export default NavbarButton;
