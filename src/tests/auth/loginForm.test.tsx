import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Login from '@/components/ModalContent/Login';
import axios from 'axios';

jest.mock('axios');

describe('LoinForm Test', () => {
  const setup = () => {
    const utils = render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email', { exact: false });
    const passwrodInput = screen.getByPlaceholderText('Password', {
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
  it('submit success', async () => {
    console.log = jest.fn();
    const { emailInput, passwrodInput, submitBtn } = setup();
    await UserEvent.type(emailInput, 'test');
    await UserEvent.type(passwrodInput, 'pass');
    UserEvent.click(submitBtn);
    expect(axios.post).toHaveBeenCalled();
  });
});