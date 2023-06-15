import Logo from '@/components/Logo/Logo';
import { NavbarWrapper } from './NavbarWrapper-Styled';
import NavbarButton from './NavbarButton';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <NavbarButton />
    </NavbarWrapper>
  );
};

export default Navbar;
