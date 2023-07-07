import LoginedUserButton from '../NavbarContent/LoginedUserButton';
import { StatusToken } from '@/assets/status';
import AuthButton from '../NavbarContent/AuthButton';

type NavbarButtonProps = {
  token: string | null;
};

const NavbarButton = ({ token }: NavbarButtonProps) => {
  if (token === StatusToken.Initial) {
    return null;
  } else if (token === StatusToken.No_token) {
    return <AuthButton />;
  } else {
    return <LoginedUserButton />;
  }
};

export default NavbarButton;
