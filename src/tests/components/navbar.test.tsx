import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import NavbarButton from '@/components/structure/Navbar/NavbarButton';
import Modal from '@/components/common/Modal/Modal';
import Logo from '@/components/common/Logo/Logo';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
//jest.mock의 두 번재 인수는 '객체를 반환하는' 팩토리 함수.
//'next/router'를 모킹 => jest.fn()을 통해 useRoter를 모킹한 객체 반환
//mockReturnValue() => useRouter는 push를 모킹하여 반환한다.
describe('NavBar Test : Logo, Button, Modal', () => {
  it('Logo click', async () => {
    render(<Logo />);
    const bloggyLogo = screen.getByTestId('img');

    await UserEvent.click(bloggyLogo);
    expect(useRouter().push).toHaveBeenCalledTimes(1);
  });

  it('NavbarButton render', () => {
    render(<NavbarButton />);
    const button = screen.getByRole('button', {
      name: '로그인 / 회원가입',
    });
    expect(button).toBeInTheDocument();
  });

  it('Modal render', () => {
    render(<Modal isOpen={true} toggleModal={jest.fn()} />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('Modal render on click', async () => {
    render(<NavbarButton />);
    const button = screen.getByRole('button', {
      name: '로그인 / 회원가입',
    });
    await UserEvent.click(button);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
