import {
  StyledLabel,
  StyledSingleFormContainer,
  StyledInputContainer,
  StyledSingleForm,
  StyledErrMsg,
  StyledCombInput,
} from '@/components/Form/Form-Styled';
import { MsgPlaceholder } from '@/assets/message';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import { useForm } from 'react-hook-form';
import { blognameFormSchema } from '@/lib/validation/userInfoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { handleCompareTwice } from '@/lib/handler/handleCompare';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';
import { UserInfo } from '@/lib/types/auth';
import { handleErrorAlert } from '@/lib/handler/handleError';

type BlogSettingProps = {
  blogname: UserInfo['blogName'] | undefined;
};

type BlognameFormProps = {
  newBlogname: string | undefined;
};

const BlogNameSetting = ({ blogname }: BlogSettingProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(blognameFormSchema),
    defaultValues: {
      newBlogname: !blogname ? '' : blogname,
    },
    mode: 'onChange',
  });

  const changeUserInfo = useChangeUserInfo();

  const submitBlogname = async ({ newBlogname }: BlognameFormProps) => {
    try {
      handleCompareTwice(blogname, newBlogname);
      changeUserInfo.mutate({ blogName: newBlogname });
    } catch (err) {
      handleErrorAlert(err);
    }
  };

  return (
    <StyledSingleFormContainer>
      <StyledSingleForm onSubmit={handleSubmit(submitBlogname)}>
        <StyledLabel htmlFor="blog">블로그 이름</StyledLabel>
        <StyledInputContainer>
          <StyledCombInput
            id="blog"
            placeholder={MsgPlaceholder.blogName}
            combbtntext="수정"
            {...register('newBlogname')}
          />
          <Button
            type="submit"
            color={Palette.SPOT1}
            hover={'opacity'}
            size={'comb'}
            content={'수정'}
            disabled={isSubmitting}
          />
        </StyledInputContainer>
        <StyledErrMsg>{errors.newBlogname?.message}</StyledErrMsg>
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default BlogNameSetting;
