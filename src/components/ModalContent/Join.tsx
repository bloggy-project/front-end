import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledMinInput,
  StyledInputContainer,
  StyledErrMsg,
} from './Form-Styled';
import { joinSchema } from '@/lib/validation/schame';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import { onJoin } from '@/lib/api/auth';

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(joinSchema),
    mode: 'onChange',
  });

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(onJoin)}>
        <StyledInput
          placeholder="이메일을 입력해 주세요"
          {...register('email')}
        />
        <StyledErrMsg>{errors.email?.message}</StyledErrMsg>
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          {...register('password')}
        />
        <StyledErrMsg>{errors.password?.message}</StyledErrMsg>
        <StyledInput
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
          {...register('pwdConfirm')}
        />
        <StyledErrMsg>{errors.pwdConfirm?.message}</StyledErrMsg>
        <StyledInputContainer>
          <StyledMinInput
            placeholder="닉네임을 입력해 주세요"
            {...register('name')}
          />
          <Button
            type="button"
            color={Palette.NATURAL}
            hover={'opacity'}
            size={'modal-sm'}
            content={'중복 확인'}
          />
        </StyledInputContainer>
        <StyledErrMsg>{errors.name?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.SPOT1}
          hover={'opacity'}
          size={'modal'}
          content={'회원가입'}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Join;
