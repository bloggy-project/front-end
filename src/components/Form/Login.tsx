import { loginFormSchema } from '@/lib/validation/authSchame';
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
import { MsgAlert, MsgPlaceholder } from '@/assets/message';
import handleToast from '@/lib/handler/handleToast';
import { getErrorResponseMsg } from '@/lib/handler/handleError';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    resetField,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: 'onChange',
  });
  const setToggleModal = modalStore((state) => state.setToggleModal);

  const submitLogin = async ({ email, password }: loginProps) => {
    try {
      await onLogin(email, password);
      reset();
      setToggleModal();
      handleToast({
        type: 'success',
        message: MsgAlert.Login.success,
        cratedOption: { position: 'top-center' },
      });
    } catch (err) {
      handleToast({
        type: 'error',
        message: getErrorResponseMsg(err, MsgAlert.Login.fail),
        cratedOption: { position: 'top-center' },
      });
      resetField('password');
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
