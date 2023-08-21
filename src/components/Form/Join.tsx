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
import handleToast from '@/lib/handler/handleToast';
import { getErrorResponseMsg } from '@/lib/handler/handleError';

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
      try {
        await onJoin(joinInfo);
        handleToast({
          type: 'success',
          message: MsgAlert.Join.success,
          cratedOption: { position: 'top-center' },
        });
        reset();
      } catch (err) {
        handleToast({
          type: 'error',
          message: getErrorResponseMsg(err, MsgAlert.Join.fail),
          cratedOption: { position: 'top-center' },
        });
      }
    } else {
      handleToast({
        type: 'warning',
        message: '닉네임 중복을 확인해 주세요',
        cratedOption: { position: 'top-center' },
      });
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
        handleToast({
          type: 'success',
          message: MsgAlert.Join.usableName,
          cratedOption: { position: 'top-center' },
        });
      } catch (err) {
        handleToast({
          type: 'warning',
          message: getErrorResponseMsg(err, MsgAlert.Join.disUseableName),
          cratedOption: { position: 'top-center' },
        });
        setError('name', {
          message: MsgAlert.Join.disUseableName,
        });
        onClearStrings();
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
