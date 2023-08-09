import { RefObject, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import { getPreSignedUrl, uploadImg } from '@/lib/api/aws';
import handleCdnPath from '@/lib/handler/handleCdnPath';
import imgListStore from '@/store/imageListStore';
import { shallow } from 'zustand/shallow';
import { handleImgFile } from '@/lib/handler/handleImgFile';
import { handleErrorAlert } from '@/lib/handler/handleError';
import useWindowResize from '@/hooks/useWindowResize';
import { StyledEditorcontainer } from './EditWysiwyg-Styled';

type EditWysiwygProps = {
  initialContent?: string;
  editorRef: RefObject<Editor>;
};

const EditWysiwyg = ({ initialContent, editorRef }: EditWysiwygProps) => {
  const toolbarOptions = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
  ];
  const { clearImgList, addImgList } = imgListStore(
    (state) => ({
      clearImgList: state.clearImgList,
      addImgList: state.addImgList,
    }),
    shallow,
  );

  const innerWidth = useWindowResize();

  useEffect(() => {
    clearImgList();
  }, []);

  const uploadImgUrl = async (
    file: File | Blob,
    setImg: (url: string, text?: string) => void,
  ) => {
    try {
      const imgFile = handleImgFile(file);
      const presignedUrl = await getPreSignedUrl(imgFile.name);
      await uploadImg(presignedUrl, imgFile);
      const postImgUrl = handleCdnPath(presignedUrl, 'post');
      setImg(postImgUrl, imgFile.name);
      addImgList(postImgUrl);
    } catch (err) {
      handleErrorAlert(err);
    }
  };

  return (
    <StyledEditorcontainer>
      <Editor
        ref={editorRef}
        previewStyle={innerWidth < 900 ? 'tab' : 'vertical'}
        placeholder={'내용을 입력해 주세요'}
        height="calc(100vh - 25rem)"
        initialEditType="markdown"
        usageStatistics={false}
        useCommandShortcut={true}
        toolbarItems={toolbarOptions}
        initialValue={initialContent}
        hooks={{ addImageBlobHook: uploadImgUrl }}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </StyledEditorcontainer>
  );
};

export default EditWysiwyg;
