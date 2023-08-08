import { Editor } from '@toast-ui/react-editor';
import { MutableRefObject, RefObject } from 'react';
import { convetHTMLtoString, getCheckedString } from './handleStrings';
import { handleTagNamesChange } from './handleTagNames';

const handleGetEditorData = (
  editorRef: RefObject<Editor>,
  titleRef: MutableRefObject<HTMLInputElement | null>,
  tagNamesRef: MutableRefObject<HTMLInputElement | null>,
) => {
  const title = getCheckedString(titleRef.current?.value);
  const tagNameArr = getCheckedString(tagNamesRef.current?.value);
  const content = getCheckedString(
    editorRef?.current?.getInstance().getMarkdown(),
  );
  const contentHTML = getCheckedString(
    editorRef?.current?.getInstance().getHTML(),
  );
  const tagNames = handleTagNamesChange(tagNameArr);
  const subContent = convetHTMLtoString(contentHTML);

  return { title, tagNames, content, subContent };
};

export default handleGetEditorData;
