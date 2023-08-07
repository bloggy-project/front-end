'use client';

import { Editor } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';
import { RefObject } from 'react';
const EditWysiwyg = dynamic(() => import('../Editor/EditWysiwyg'), {
  ssr: false,
});

type EditNoSSRProps = {
  initialContent?: string | null;
  editorRef: RefObject<Editor>;
};

const EditNoSSR = ({ initialContent, editorRef }: EditNoSSRProps) => {
  return <EditWysiwyg initialContent={initialContent} editorRef={editorRef} />;
};

export default EditNoSSR;
