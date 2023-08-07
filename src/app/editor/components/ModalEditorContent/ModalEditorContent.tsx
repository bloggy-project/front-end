import Button from '@/components/Button/Button';
import { StyledModalEditor } from '../ModalEditor/ModalEditor-Styled';
import {
  StyledModalEditorContent,
  StyledImgContainer,
  StyledBtnContainer,
  StyledSubContainer,
  StyledSubContent,
  StyledHead,
} from './ModalEditorContent-Styled';
import postStore from '@/store/postStore';
import modalStore from '@/store/modalStore';
import { Palette } from '@/assets/color';
import {
  StyledTextarea,
  StyledErrMsg,
  StyledInput,
} from '@/components/Form/Form-Styled';
import { MsgPlaceholder } from '@/assets/message';
import { yupResolver } from '@hookform/resolvers/yup';
import { postFormSchema } from '@/lib/validation/postSchema';
import { useForm } from 'react-hook-form';
import Label from '@/components/Label/Label';
import Image from 'next/image';
import { ImageSizesProps } from '@/assets/size';
import ThumbImgEditor from '../ThumbImgEditor/ThumbImgEditor';
import useUploadPost from '@/query/post/useUploadPost';
import { shallow } from 'zustand/shallow';
import { handleErrorAlert } from '@/lib/handler/handleError';
import { useRouter } from 'next/navigation';

type PostFormProps = {
  title: string;
  subContent: string | undefined;
};

const ModalEditorContent = () => {
  const { post, setPost, clearPost } = postStore(
    (state) => ({
      post: state.post,
      setPost: state.setPost,
      clearPost: state.clearPost,
    }),
    shallow,
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(postFormSchema),
    defaultValues: {
      subContent: post.subContent,
      title: post.title,
    },
    mode: 'onChange',
  });
  const setToggleModalEditor = modalStore(
    (state) => state.setToggleModalEditor,
  );
  const noImage = '/no-image.jpg';
  const uploadPost = useUploadPost();
  const router = useRouter();

  const onClicktoIndex = () => {
    router.push('/');
  };

  const submitPost = async ({ title, subContent }: PostFormProps) => {
    try {
      setPost({ title, subContent });
      uploadPost.mutate(post);
      setToggleModalEditor();
      clearPost();
      onClicktoIndex();
    } catch (err) {
      handleErrorAlert(err);
    }
  };

  return (
    <StyledModalEditor>
      <form onSubmit={handleSubmit(submitPost)}>
        <StyledModalEditorContent>
          <StyledHead>미리보기 설정</StyledHead>
          <StyledSubContainer>
            <StyledSubContent>
              <StyledImgContainer>
                <Image
                  src={post.thumbnail ? post.thumbnail : noImage}
                  alt={post.title}
                  fill
                  sizes={ImageSizesProps.default}
                  priority
                />
              </StyledImgContainer>
              <ThumbImgEditor />
            </StyledSubContent>
            <StyledSubContent>
              <Label
                htmlfor="title"
                content="제목"
                fontSize="1.4rem"
                margin="0 0 0.5rem 0"
              />
              <StyledInput
                disabled={true}
                id="title"
                placeholder={MsgPlaceholder.title}
                {...register('title')}
              />
              <StyledErrMsg>{errors.title?.message}</StyledErrMsg>
              <Label
                htmlfor="subContent"
                content="내용"
                fontSize="1.4rem"
                margin="0 0 0.5rem 0"
              />
              <StyledTextarea
                id="subContent"
                height="12rem"
                placeholder={MsgPlaceholder.content}
                {...register('subContent')}
              />
              <StyledErrMsg>{errors.subContent?.message}</StyledErrMsg>
            </StyledSubContent>
          </StyledSubContainer>
          <StyledBtnContainer>
            <Button
              type="button"
              color={Palette.NATURAL}
              hover={'opacity'}
              size={'md'}
              content={'닫기'}
              onClick={setToggleModalEditor}
            />
            <Button
              type="submit"
              color={Palette.TWISTED1}
              hover={'opacity'}
              size={'md'}
              content={'제출하기'}
              disabled={isSubmitting}
            />
          </StyledBtnContainer>
        </StyledModalEditorContent>
      </form>
    </StyledModalEditor>
  );
};

export default ModalEditorContent;
