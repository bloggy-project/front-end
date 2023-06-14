import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import NavbarButton from '@/components/structure/Navbar/NavbarButton';
import Modal from '@/components/common/Modal/Modal';

describe('NavBar Test : Button, Modal', () => {
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
