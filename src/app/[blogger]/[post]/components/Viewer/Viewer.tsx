'use client';

import { StyledViewercontainer } from './Viewer-Styled';
import ViewerMarkdownMode from '../ViewerMDMode/ViewNoSSR';
import ViewerTitle from '../ViewerTitle/ViewerTitle';
import { PostGet } from '@/lib/types/post';
import FavoriteBox from '../FavoriteBox/FavoriteCount';
import TagBox from '../TagBox/TagBox';

type ViewerProps = {
  post: PostGet;
};

const Viewer = ({ post }: ViewerProps) => {
  return (
    <StyledViewercontainer>
      <ViewerTitle
        title={post.title}
        username={post.username}
        updatedAt={post.updatedAt}
      />
      <ViewerMarkdownMode initialContent={post.content} />
      <FavoriteBox isFavorite={true} favoriteCount={30} />
      <TagBox tagNames={post.tagNames} username={post.username} />
    </StyledViewercontainer>
  );
};

export default Viewer;
