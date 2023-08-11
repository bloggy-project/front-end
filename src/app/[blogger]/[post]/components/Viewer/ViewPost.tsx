import { Viewer } from '@toast-ui/react-editor';

type ViewPostProps = {
  initialContent: string;
};

const ViewPost = ({ initialContent }: ViewPostProps) => {
  return (
    <div>
      <Viewer initialValue={initialContent} />
    </div>
  );
};

export default ViewPost;
