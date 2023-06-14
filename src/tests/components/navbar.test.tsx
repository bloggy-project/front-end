import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import AuthButton from '@/components/structure/Navbar/NavbarButton';

jest.mock('@/components/common/Modal/Modal', () => {
  const mockModal = () => {
    return <div id="dummy-modal"></div>;
  };
  return mockModal;
});

const { container } = render(<AuthButton />);
const user = UserEvent.setup();

describe('로그인/ 회원가입 버튼', () => {
  const AuthButton = screen.getByRole('button', {
    name: '로그인 / 회원가입',
  });
  it('render', () => {
    expect(AuthButton).toBeInTheDocument();
  });
  it('child render on click', async () => {
    user.click(AuthButton);
    expect(container.querySelector('#dummy-modal')).toBeInTheDocument();
  });
});
