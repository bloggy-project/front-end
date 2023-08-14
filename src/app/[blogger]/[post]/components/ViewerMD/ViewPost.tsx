'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

type ViewPostProps = {
  initialContent: string;
};

const ViewPost = ({ initialContent }: ViewPostProps) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {initialContent}
      </ReactMarkdown>
    </div>
  );
};

export default ViewPost;
