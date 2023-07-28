import { loginFormSchema } from '@/lib/validation/schame';
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
import authStore, { UserInfo } from '@/store/authStore';
import { shallow } from 'zustand/shallow';
import { MsgAlert, MsgPlaceholder } from '@/assets/message';
import MyLocalStorage from '@/lib/handler/handleLocalStorage';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: 'onChange',
  });
  const setToggleModal = modalStore((state) => state.setToggleModal);

  // const { setUserInfo } = authStore(
  //   (state) => ({
  //     setAccessToken: state.setAccessToken,
  //     setUserInfo: state.setUserInfo,
  //   }),
  //   shallow,
  // );
  const submitLogin = async ({ email, password }: loginProps) => {
    try {
      const userInfo = await onLogin(email, password);
      // new MyLocalStorage<UserInfo>('userInfo').set(userInfo);
      reset();
      setToggleModal();
      alert(MsgAlert.Login.success);
    } catch (err) {
      alert(MsgAlert.Login.fail);
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(submitLogin)}>
        <StyledInput
          placeholder={MsgPlaceholder.email}
          {...register('email')}
        />
        <StyledErrMsg>{errors.email?.message}</StyledErrMsg>

        <StyledInput
          type="password"
          placeholder={MsgPlaceholder.password}
          {...register('password')}
        />
        <StyledErrMsg>{errors.password?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.SPOT1}
          hover={'opacity'}
          size={'modal'}
          content={'로그인'}
          disabled={isSubmitting}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Login;
