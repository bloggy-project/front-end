import { loginSchema } from '@/lib/validation/schame';
import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledErrMsg,
} from './Form-Styled';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import { onLogin } from '@/lib/api/auth';
import { loginProps } from '@/lib/types/auth';
import modalStore from '@/store/modalStore';
import authStore from '@/store/authStore';
import { shallow } from 'zustand/shallow';
import useDisable from '@/hooks/useDisable';

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
  const setToggleModal = modalStore((state) => state.setToggleModal);
  const { isDisable, autoSetDisableWithData } = useDisable();
  const { setUserInfo } = authStore(
    (state) => ({
      setAccessToken: state.setAccessToken,
      setUserInfo: state.setUserInfo,
    }),
    shallow,
  );
  const submitLogin = async ({ email, password }: loginProps) => {
    try {
      const {
        thumbnail,
        name,
        email: userEmail,
      } = await autoSetDisableWithData(onLogin(email, password));

      const userInfo = { thumbnail, name, email: userEmail };
      alert('로그인에 성공하였습니다.');
      setUserInfo(userInfo);
      reset();
      setToggleModal();
    } catch (err) {
      alert('로그인에 실패하였습니다. 다시 한 번 확인해 주세요.');
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(submitLogin)}>
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
          {...register('password')}
        />
        <StyledErrMsg>{errors.password?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.SPOT1}
          hover={'opacity'}
          size={'modal'}
          content={'로그인'}
          disabled={isDisable}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Login;
