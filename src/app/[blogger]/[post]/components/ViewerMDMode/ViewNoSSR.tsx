'use client';

import dynamic from 'next/dynamic';
const ViewerMarkdown = dynamic(() => import('../ViewerMD/ViewerMarkdown'), {
  ssr: false,
});

type ViewerNoSSRProps = {
  initialContent: string;
};

const ViewerMarkdownMode = ({ initialContent }: ViewerNoSSRProps) => {
  return <ViewerMarkdown initialContent={initialContent} />;
};

export default ViewerMarkdownMode;
