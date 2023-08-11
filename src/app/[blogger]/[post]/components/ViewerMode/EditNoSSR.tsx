'use client';

// import { Viewer } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';
import { RefObject } from 'react';
const EditWysiwyg = dynamic(() => import('../Viewer/ViewPost'), {
  ssr: false,
});

type EditNoSSRProps = {
  initialContent: string;
};

const EditNoSSR = ({ initialContent }: EditNoSSRProps) => {
  return <EditWysiwyg initialContent={initialContent} />;
};

export default EditNoSSR;
