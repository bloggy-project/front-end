'use client';
import { useRef } from 'react';
import EditNoSSR from '../EditMode/EditNoSSR';
import { Editor } from '@toast-ui/react-editor';
import Button from '@/components/Button/Button';
import { Palette } from '@/assets/color';
import { handleTagNamesChange } from '@/lib/handler/handleTagNames';
import imgListStore from '@/store/imgListStore';
import modalStore from '@/store/modalStore';
import postStore from '@/store/postStore';
import { useRouter } from 'next/navigation';
import {
  StyledBtnContainer,
  StyledEditPostContainer,
  StyledInputTagNames,
  StyledInputTitle,
} from './EditPost-Styled';
import {
  getCheckedString,
  convetHTMLtoString,
} from '@/lib/handler/handleStrings';
import Label from '@/components/Label/Label';
import { MsgPlaceholder } from '@/assets/message';

const EditPost = () => {
  const editorRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const tagNamesRef = useRef<HTMLInputElement | null>(null);

  const imgList = imgListStore((state) => state.imgList);
  const setToggleModalEditor = modalStore(
    (state) => state.setToggleModalEditor,
  );
  const setPost = postStore((state) => state.setPost);
  const router = useRouter();

  const onClicktoBack = () => {
    router.back();
  };

  const handOverPost = () => {
    const title = getCheckedString(titleRef.current?.value);
    const tagNames = getCheckedString(tagNamesRef.current?.value);
    const contentMarkdown = getCheckedString(
      editorRef?.current?.getInstance().getMarkdown(),
    );
    const contentHTML = getCheckedString(
      editorRef?.current?.getInstance().getHTML(),
    );
    const tagNameArr = handleTagNamesChange(tagNames);
    setPost({
      thumbnail: imgList[0],
      title,
      content: contentMarkdown,
      subContent: convetHTMLtoString(contentHTML),
      tagNames: tagNameArr,
    });
    setToggleModalEditor();
  };

  return (
    <StyledEditPostContainer>
      <StyledInputTitle
        ref={titleRef}
        placeholder={MsgPlaceholder.title}
        id="title"
      />
      <div>
        <Label htmlfor="tagNames" content="태그 | " fontSize="1.8rem" />
        <StyledInputTagNames
          ref={tagNamesRef}
          placeholder={MsgPlaceholder.tagNames}
          id="tagNames"
          // value={tagValue}
        />
      </div>
      <EditNoSSR editorRef={editorRef} />
      <StyledBtnContainer>
        <Button
          type="button"
          content="뒤로가기"
          color={Palette.NATURAL}
          hover={'opacity'}
          size={'sm'}
          onClick={onClicktoBack}
        />
        <Button
          type="button"
          content="제출하기"
          color={Palette.TWISTED1}
          hover={'opacity'}
          size={'sm'}
          onClick={handOverPost}
        />
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
