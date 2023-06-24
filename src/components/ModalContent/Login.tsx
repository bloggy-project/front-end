import { loginSchema } from '@/lib/validation/schame';
import { loginProps } from '@/lib/types/auth';
import {
  StyledFormContainer,
  StyledLoginForm,
  StyledInput,
  StyledErrMsg,
} from './Login-Styled';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import axios from 'axios';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onLogin = async ({ email, pwd }: loginProps) => {
    console.log({ email: email, pwd: pwd });
    reset();
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(onLogin)}>
      <StyledLoginForm>
        <StyledInput
          id="email"
          placeholder="이메일을 입력해 주세요"
          {...register('email')}
        />
        <StyledErrMsg>{errors.email?.message}</StyledErrMsg>

        <StyledInput
          type="password"
          id="pwd"
          placeholder="비밀번호를 입력해 주세요"
          {...register('pwd')}
        />
        <StyledErrMsg>{errors.pwd?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.TWISTED1}
          hover={'opacity'}
          size={'full'}
          content={'로그인'}
        />
      </StyledLoginForm>
    </StyledFormContainer>
  );
};

export default Login;
