import Logo from '@/components/Logo/Logo';
import { NavbarWrapper } from './NavbarWrapper-Styled';
import NavbarButton from './NavbarButton';
import useRefreshToken from '../../hooks/useRefreshToken';
import modalStore from '@/store/modalStore';
import useScrollOverflow from '@/hooks/useScrollOverflow';
import useGetUserInfo from '@/query/userinfo/useGetUserInfo';

const Navbar = () => {
  const accessToken = useRefreshToken();
  const isOpenModal = modalStore((state) => state.isOpenModal);
  useScrollOverflow(isOpenModal);

  return (
    <NavbarWrapper>
      <Logo />
      <NavbarButton token={accessToken} />
    </NavbarWrapper>
  );
};

export default Navbar;
