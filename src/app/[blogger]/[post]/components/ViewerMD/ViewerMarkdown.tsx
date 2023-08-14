import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import '@/stylesheet/toast-viewer.css';

type ViewPostProps = {
  initialContent: string;
};

const ViewerMarkdown = ({ initialContent }: ViewPostProps) => {
  return (
    <Viewer
      initialValue={initialContent}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
};

export default ViewerMarkdown;
