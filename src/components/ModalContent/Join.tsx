import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledMinInput,
  StyledInputContainer,
  StyledErrMsg,
} from './Form-Styled';
import { joinSchema, nameSchema } from '@/lib/validation/schame';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import { checkUserName, onJoin } from '@/lib/api/auth';
import { joinProps } from '@/lib/types/auth';
import useCheckStrings from '@/hooks/useCheckStrings';
import useDisable from '@/hooks/useDisable';

const Join = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(joinSchema),
    mode: 'onChange',
  });
  const { isCheckedStrings, onSetStrings, onClearStrings } = useCheckStrings();
  const { isDisable, autoSetDisable } = useDisable();

  const submitJoin = async (joinInfo: joinProps) => {
    const name = getValues().name;
    if (isCheckedStrings === name) {
      await autoSetDisable(onJoin(joinInfo));
      alert('회원가입이 완료되었습니다');
      reset();
    } else {
      setError('name', {
        message: '닉네임 중복을 확인해 주세요',
      });
    }
  };

  const handleCheckName = async () => {
    const name = getValues().name;
    if (await nameSchema.isValid(name)) {
      try {
        await autoSetDisable(checkUserName(name));
        onSetStrings(name);
        clearErrors('name');
        alert('사용할 수 있는 닉네임입니다');
      } catch (err) {
        if (err instanceof Error) {
          alert('이미 존재하는 닉네임입니다');
          setError('name', {
            message: '이미 존재하는 닉네임입니다',
          });
          onClearStrings();
        }
      }
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(submitJoin)}>
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
            onClick={handleCheckName}
            disabled={isDisable}
          />
        </StyledInputContainer>
        <StyledErrMsg>{errors.name?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.SPOT1}
          hover={'opacity'}
          size={'modal'}
          content={'회원가입'}
          disabled={isDisable}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Join;
