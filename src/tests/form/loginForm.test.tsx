import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Login from '@/components/Form/Login';

describe('LoinForm Test', () => {
  const setup = () => {
    const utils = render(<Login />);
    const emailInput = screen.getByPlaceholderText('이메일', { exact: false });
    const passwrodInput = screen.getByPlaceholderText('비밀번호', {
      exact: false,
    });
    const submitBtn = screen.getByRole('button', { name: '로그인' });
    return {
      emailInput,
      passwrodInput,
      submitBtn,
      ...utils,
    };
  };
  it('typing Login inputs', async () => {
    const { emailInput, passwrodInput } = setup();
    await UserEvent.type(emailInput, 'test');
    await UserEvent.type(passwrodInput, 'pass');
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    expect(screen.getByDisplayValue('pass')).toBeInTheDocument();
  });
});
