import {
  StyledLabel,
  StyledCombTextarea,
  StyledSingleFormContainer,
  StyledSingleForm,
  StyledErrMsg,
  StyledTextareaContainer,
} from '@/components/Form/Form-Styled';
import { MsgPlaceholder } from '@/assets/message';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import { useForm } from 'react-hook-form';
import { descriptionFormSchema } from '@/lib/validation/userInfoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';
import { handleCompareTwice } from '@/lib/handler/handleCompare';
import { UserInfo } from '@/lib/types/auth';
import { handleErrorAlert } from '@/lib/handler/handleError';

type DescriptionSettingProps = {
  description: UserInfo['description'] | undefined;
};

type DescriptionFormProps = {
  newDescription: string | undefined;
};

const DescriptionSetting = ({ description }: DescriptionSettingProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(descriptionFormSchema),
    defaultValues: {
      newDescription: !description ? '' : description,
    },
    mode: 'onChange',
  });

  const changeUserInfo = useChangeUserInfo();

  const submitDescription = async ({
    newDescription,
  }: DescriptionFormProps) => {
    try {
      handleCompareTwice(description, newDescription);
      changeUserInfo.mutate({ description: newDescription });
    } catch (err) {
      handleErrorAlert(err);
    }
  };

  return (
    <StyledSingleFormContainer>
      <StyledSingleForm onSubmit={handleSubmit(submitDescription)}>
        <StyledLabel htmlFor="description">설명</StyledLabel>
        <StyledTextareaContainer>
          <StyledCombTextarea
            id="description"
            height="6rem"
            placeholder={MsgPlaceholder.description}
            combbtntext="수정"
            {...register('newDescription')}
          />
          <Button
            type="submit"
            color={Palette.SPOT1}
            hover={'opacity'}
            size={'comb'}
            content={'수정'}
            disabled={isSubmitting}
          />
        </StyledTextareaContainer>
        <StyledErrMsg>{errors.newDescription?.message}</StyledErrMsg>
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default DescriptionSetting;
