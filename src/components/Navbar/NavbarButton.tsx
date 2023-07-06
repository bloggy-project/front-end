import LoginedButton from '../User/LoginedButton';
import { StatusToken } from '@/assets/status';
import AuthButton from '../User/AuthButton';

type NavbarButtonProps = {
  token: string | null;
};

const NavbarButton = ({ token }: NavbarButtonProps) => {
  if (token === StatusToken.Initial) {
    return null;
  } else if (token === StatusToken.No_token) {
    return <AuthButton />;
  } else {
    return <LoginedButton />;
  }
};

export default NavbarButton;
