import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Join from '@/components/ModalContent/Join';

describe('JoinForm Test', () => {
  it('typing Join inputs', async () => {
    render(<Join />);
    const emailInput = screen.getByPlaceholderText('이메일', { exact: false });
    const passwrodInput =
      screen.getByPlaceholderText('비밀번호를 입력해 주세요');
    const passwrodCheckInput = screen.getByPlaceholderText('다시 한 번', {
      exact: false,
    });
    const nameInput = screen.getByPlaceholderText('닉네임', {
      exact: false,
    });
    await UserEvent.type(emailInput, 'test');
    await UserEvent.type(passwrodInput, 'pass');
    await UserEvent.type(passwrodCheckInput, 'pass-check');
    await UserEvent.type(nameInput, '닉네임');
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    expect(screen.getByDisplayValue('pass')).toBeInTheDocument();
    expect(screen.getByDisplayValue('pass-check')).toBeInTheDocument();
    expect(screen.getByDisplayValue('닉네임')).toBeInTheDocument();
  });
});
