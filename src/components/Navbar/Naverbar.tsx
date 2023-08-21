import Logo from '@/components/Logo/Logo';
import { NavbarWrapper } from './NavbarWrapper-Styled';
import NavbarButton from './NavbarButton';
import useRefreshToken from '../../hooks/useRefreshToken';
import modalStore from '@/store/modalStore';
import useScrollOverflow from '@/hooks/useScrollOverflow';
import ToastCustom from '../Toast/ToastCustom';

const Navbar = () => {
  const accessToken = useRefreshToken();
  const isOpenModal = modalStore((state) => state.isOpenModal);
  useScrollOverflow(isOpenModal);

  return (
    <>
      <NavbarWrapper>
        <Logo />
        <NavbarButton token={accessToken} />
      </NavbarWrapper>
      <ToastCustom />
    </>
  );
};

export default Navbar;
