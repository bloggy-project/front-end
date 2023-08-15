'use client';
import { useEffect, useRef } from 'react';
import EditNoSSR from '../EditMode/EditNoSSR';
import { Editor } from '@toast-ui/react-editor';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import imageListStore from '@/store/imageListStore';
import modalStore from '@/store/modalStore';
import postStore from '@/store/postStore';
import { useRouter } from 'next/navigation';
import {
  StyledBtnContainer,
  StyledEditPostContainer,
  StyledInputTagNames,
  StyledInputTitle,
} from './EditPost-Styled';
import Label from '@/components/Label/Label';
import handleGetEditorData from '@/lib/handler/handleGetEditorData';
import { MsgPlaceholder } from '@/assets/message';
import useGetTempPost from '@/query/post/useGetTempPost';
import useUploadTempPost from '@/query/post/useUploadTempPost';
import { convetTagsArrayToString } from '@/lib/handler/handleTagNames';
import {
  StyledBtnSpace,
  StyledSubBtnBox,
} from '@/components/Button/Button-Styled';

const EditPost = () => {
  const editorRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const tagNamesRef = useRef<HTMLInputElement | null>(null);
  const imageList = imageListStore((state) => state.imageList);
  const setToggleModalEditor = modalStore(
    (state) => state.setToggleModalEditor,
  );
  const setPost = postStore((state) => state.setPost);
  const { tempPost } = useGetTempPost();
  const uploadTempPost = useUploadTempPost();
  const router = useRouter();
  const onClicktoBack = () => {
    router.back();
  };

  const onClickUploadTempPost = () => {
    const { title, tagNames, content } = handleGetEditorData(
      editorRef,
      titleRef,
      tagNamesRef,
    );
    const newTempPost = {
      title,
      tagNames,
      content,
      imageList,
    };
    uploadTempPost.mutate(newTempPost);
  };
  useEffect(() => {
    const intervalTempPost = setInterval(() => {
      onClickUploadTempPost();
    }, 300000); //30초 인터벌 임시저장
    return () => clearInterval(intervalTempPost);
  }, []);

  const onClickServePost = () => {
    const { title, tagNames, content, subContent } = handleGetEditorData(
      editorRef,
      titleRef,
      tagNamesRef,
    );
    setPost({
      thumbnail: imageList[0],
      title,
      content,
      subContent,
      tagNames,
    });
    setToggleModalEditor();
  };

  return (
    <StyledEditPostContainer>
      <StyledInputTitle
        ref={titleRef}
        placeholder={MsgPlaceholder.title}
        defaultValue={tempPost?.title}
        id="title"
      />
      <div>
        <Label htmlfor="tagNames" content="태그 | " fontSize="1.8rem" />
        <StyledInputTagNames
          ref={tagNamesRef}
          placeholder={MsgPlaceholder.tagNames}
          defaultValue={convetTagsArrayToString(tempPost?.tagNames)}
          id="tagNames"
        />
      </div>
      {tempPost?.content ? (
        <EditNoSSR initialContent={tempPost.content} editorRef={editorRef} />
      ) : (
        <>
          <EditNoSSR editorRef={editorRef} />
        </>
      )}
      <StyledBtnContainer>
        <Button
          type="button"
          content="뒤로가기"
          color={Palette.NATURAL}
          hover={'opacity'}
          size={'sm'}
          onClick={onClicktoBack}
        />
        <StyledSubBtnBox display="flex" align="center">
          <Button
            type="button"
            content="임시저장"
            color={Palette.TWISTED3}
            hover={'opacity'}
            size={'sm'}
            onClick={onClickUploadTempPost}
          />
          <StyledBtnSpace marginLR="1rem"></StyledBtnSpace>
          <Button
            type="button"
            content="제출하기"
            color={Palette.TWISTED1}
            hover={'opacity'}
            size={'sm'}
            onClick={onClickServePost}
          />
        </StyledSubBtnBox>
      </StyledBtnContainer>
    </StyledEditPostContainer>
  );
};

export default EditPost;
