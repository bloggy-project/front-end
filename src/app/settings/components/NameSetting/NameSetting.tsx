import {
  StyledLabel,
  StyledInputContainer,
  StyledSingleFormContainer,
  StyledSingleForm,
  StyledErrMsg,
  StyledCombInput,
  StyledInput,
} from '@/components/Form/Form-Styled';
import { MsgPlaceholder } from '@/assets/message';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import { useForm } from 'react-hook-form';
import { nameFormSchema } from '@/lib/validation/schame';
import { yupResolver } from '@hookform/resolvers/yup';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';
import { handleCompareTwice } from '@/lib/handler/handleCompare';
import { UserInfo } from '@/lib/types/auth';
import { AiFillLock } from 'react-icons/ai';

type NameSettingProps = {
  name: UserInfo['name'];
};

type NameFormProps = {
  newName: string | undefined;
};

const NameSetting = ({ name }: NameSettingProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(nameFormSchema),
    mode: 'onChange',
  });

  const changeUserInfo = useChangeUserInfo();

  const submitName = ({ newName }: NameFormProps) => {
    try {
      handleCompareTwice(name, newName);
      changeUserInfo.mutate({ name: newName });
    } catch (err) {
      return;
    }
  };

  return (
    <StyledSingleFormContainer>
      <StyledSingleForm onSubmit={handleSubmit(submitName)}>
        <StyledLabel htmlFor="name">닉네임</StyledLabel>
        <StyledInputContainer>
          <StyledInput
            id="name"
            placeholder={MsgPlaceholder.name}
            defaultValue={name}
            disabled
          />
          <AiFillLock />
        </StyledInputContainer>
        <StyledErrMsg>{errors.newName?.message}</StyledErrMsg>
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default NameSetting;

//추후 닉네임 수정 가능 시 Input을 EmailSetting의 것과 바꾼다.
