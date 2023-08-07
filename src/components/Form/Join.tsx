import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledCombInput,
  StyledInputContainer,
  StyledErrMsg,
} from './Form-Styled';
import { joinFormSchema, nameSchema } from '@/lib/validation/authSchame';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import { checkUserName, onJoin } from '@/lib/api/auth';
import { joinProps } from '@/lib/types/auth';
import useCheckStrings from '@/hooks/useCheckStrings';
import { MsgAlert, MsgPlaceholder } from '@/assets/message';

const Join = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(joinFormSchema),
    mode: 'onChange',
  });
  const { isCheckedStrings, onSetStrings, onClearStrings } = useCheckStrings();

  const submitJoin = async (joinInfo: joinProps) => {
    //폼 제출 전 닉네임 중복확인 여부 확인
    const name = getValues().name;
    if (isCheckedStrings === name) {
      await onJoin(joinInfo);
      alert(MsgAlert.Join.success);
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
        await checkUserName(name);
        onSetStrings(name);
        clearErrors('name');
        alert(MsgAlert.Join.usableName);
      } catch (err) {
        if (err instanceof Error) {
          alert(MsgAlert.Join.disUseableName);
          setError('name', {
            message: MsgAlert.Join.disUseableName,
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
        <StyledInput
          type="password"
          placeholder={MsgPlaceholder.pwdConfirm}
          {...register('pwdConfirm')}
        />
        <StyledErrMsg>{errors.pwdConfirm?.message}</StyledErrMsg>
        <StyledInputContainer>
          <StyledCombInput
            placeholder={MsgPlaceholder.name}
            combbtntext="중복 확인"
            {...register('name')}
          />
          <Button
            type="button"
            color={Palette.NATURAL}
            hover={'opacity'}
            size={'comb'}
            content={'중복 확인'}
            onClick={handleCheckName}
            disabled={isSubmitting}
          />
        </StyledInputContainer>
        <StyledErrMsg>{errors.name?.message}</StyledErrMsg>
        <Button
          type="submit"
          color={Palette.SPOT1}
          hover={'opacity'}
          size={'modal'}
          content={'회원가입'}
          disabled={isSubmitting}
        />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Join;
