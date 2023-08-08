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
import {
  setLocalStorage,
  getLocalStorage,
} from '@/lib/handler/handleLocalStorage';
import { TempPost } from '@/lib/types/post';
import { Name } from '@/assets/storage';
import { MsgPlaceholder } from '@/assets/message';

const EditPost = () => {
  const editorRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const tagNamesRef = useRef<HTMLInputElement | null>(null);
  const imageList = imageListStore((state) => state.imageList);
  const setToggleModalEditor = modalStore(
    (state) => state.setToggleModalEditor,
  );
  const setPost = postStore((state) => state.setPost);
  const tempPost = getLocalStorage<TempPost>(Name.TempPost);
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
    setLocalStorage(newTempPost, Name.TempPost);
  };

  useEffect(() => {
    const intervalTempPost = setInterval(() => {
      onClickUploadTempPost();
    }, 300000);
    return () => clearInterval(intervalTempPost);
  }, []);

  const handOverPost = () => {
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
          defaultValue={tempPost?.tagNames}
          id="tagNames"
          // value={tagValue}
        />
      </div>
      <EditNoSSR initialContent={tempPost?.content} editorRef={editorRef} />
      <StyledBtnContainer>
        <Button
          type="button"
          content="뒤로가기"
          color={Palette.NATURAL}
          hover={'opacity'}
          size={'sm'}
          onClick={onClicktoBack}
        />
        <div>
          <Button
            type="button"
            content="임시저장"
            color={Palette.TWISTED2}
            hover={'opacity'}
            size={'sm'}
            onClick={onClickUploadTempPost}
          />
          <Button
            type="button"
            content="제출하기"
            color={Palette.TWISTED1}
            hover={'opacity'}
            size={'sm'}
            onClick={handOverPost}
          />
        </div>
      </StyledBtnContainer>
    </StyledEditPostContainer>
  );
};

export default EditPost;
// 태그네임 리팩토링 시 고려사항
// const [tagValue, setTagValue] = useState<string>('');

// const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   let inputValue = event.target.value;
//   if (inputValue && inputValue.charAt(0) !== '#') {
//     inputValue = `#${inputValue}`;
//   }
//   setTagValue(inputValue);
// };
// const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     setTagValue((tagNames) => `${tagNames} #`);
//   }
// };
