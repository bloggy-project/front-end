import { Editor } from '@toast-ui/react-editor';
import { MutableRefObject, RefObject } from 'react';
import { convetHTMLtoString, getCheckedString } from './handleStrings';
import { convertTagsToArray } from './handleTagNames';

const getEditorData = (
  editorRef: RefObject<Editor>,
  titleRef: MutableRefObject<HTMLInputElement | null>,
  tagNamesRef: MutableRefObject<HTMLInputElement | null>,
) => {
  const title = getCheckedString(titleRef.current?.value);
  const tagName = getCheckedString(tagNamesRef.current?.value);
  const content = getCheckedString(
    editorRef?.current?.getInstance().getMarkdown(),
  );
  const contentHTML = getCheckedString(
    editorRef?.current?.getInstance().getHTML(),
  );
  const tagNames = convertTagsToArray(tagName);
  const subContent = convetHTMLtoString(contentHTML);

  return { title, tagNames, content, subContent };
};

export default getEditorData;
