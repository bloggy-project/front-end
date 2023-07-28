import {
  StyledLabel,
  StyledInput,
  StyledSingleFormContainer,
  StyledSingleForm,
  StyledIconInputContainer,
  StyledCombInput,
  StyledErrMsg,
} from '@/components/Form/Form-Styled';
import { MsgPlaceholder } from '@/assets/message';
import { AiFillLock } from 'react-icons/ai';
import { UserInfo } from '@/lib/types/auth';
import { useForm } from 'react-hook-form';
import { emailFormSchema } from '@/lib/validation/schame';
import { yupResolver } from '@hookform/resolvers/yup';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';
import { handleCompareTwice } from '@/lib/handler/handleCompare';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';

type EmailSettingProps = {
  email: UserInfo['email'];
};

type EmailFormProps = {
  newEmail: string;
};

const EmailSetting = ({ email }: EmailSettingProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(emailFormSchema),
    defaultValues: {
      newEmail: !email ? '' : email,
    },
    mode: 'onChange',
  });

  const changeUserInfo = useChangeUserInfo();

  const submitEmail = ({ newEmail }: EmailFormProps) => {
    try {
      handleCompareTwice(email, newEmail);
      changeUserInfo.mutate({ email: newEmail });
    } catch (err) {
      return;
    }
  };
  return (
    <StyledSingleFormContainer onSubmit={handleSubmit(submitEmail)}>
      <StyledSingleForm>
        <StyledLabel htmlFor="email">이메일</StyledLabel>
        <StyledIconInputContainer>
          <StyledCombInput
            id="email"
            placeholder={MsgPlaceholder.email}
            combbtntext={'수정'}
            {...register('newEmail')}
          />
          <Button
            type="submit"
            color={Palette.SPOT1}
            hover={'opacity'}
            size={'comb'}
            content={'수정'}
            disabled={isSubmitting}
          />
        </StyledIconInputContainer>
        <StyledErrMsg>{errors.newEmail?.message}</StyledErrMsg>
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default EmailSetting;

// 추후 이메일 수정 금지 작업 시 주석 제거해서 사용
// StyledIconInputContainer 안에서 사용
//           <StyledInput
//             id="email"
//             placeholder={MsgPlaceholder.email}
//             defaultValue={email}
//             disabled
//           />
//           <AiFillLock />
