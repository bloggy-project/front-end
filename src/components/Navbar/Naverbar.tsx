import Logo from '@/components/Logo/Logo';
import { NavbarWrapper } from './NavbarWrapper-Styled';
import NavbarButton from './NavbarButton';
import useRefreshToken from '../../hooks/useRefreshToken';

const Navbar = () => {
  const accessToken = useRefreshToken();
  return (
    <NavbarWrapper>
      <Logo />
      <NavbarButton token={accessToken} />
    </NavbarWrapper>
  );
};

export default Navbar;
