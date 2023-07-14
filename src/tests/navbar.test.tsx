import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import NavbarButton from '@/components/Navbar/NavbarButton';
import { StatusToken } from '@/assets/status';

describe('NavBar Test : Button, Modal', () => {
  const setup = (tokenStatus: string) => {
    const utils = render(<NavbarButton token={tokenStatus} />);
    return utils;
  };

  it('AuthButton render', () => {
    const button = setup(StatusToken.No_token).getByRole('button', {
      name: '로그인 / 회원가입',
    });
    expect(button).toBeInTheDocument();
  });

  it('Modal render on click AuthButton', async () => {
    const button = setup(StatusToken.No_token).getByRole('button', {
      name: '로그인 / 회원가입',
    });
    await UserEvent.click(button);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
