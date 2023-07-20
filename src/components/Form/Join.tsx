import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledCombInput,
  StyledInputContainer,
  StyledErrMsg,
} from './Form-Styled';
import { joinFormSchema, nameSchema } from '@/lib/validation/schame';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Palette } from '@/assets/color';
import { checkUserName, onJoin } from '@/lib/api/auth';
import { joinProps } from '@/lib/types/auth';
import useCheckStrings from '@/hooks/useCheckStrings';
import useDisable from '@/hooks/useDisable';
import { MsgPlaceholder } from '@/assets/message';

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
    resolver: yupResolver(joinFormSchema),
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
