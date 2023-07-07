import { StyledEmptyContent } from './StyledEmptyContent';
import { MdContentPasteOff } from 'react-icons/md';

const EmptyContent = () => {
  return (
    <StyledEmptyContent>
      <MdContentPasteOff />
      <span>게시글이 존재하지 않습니다</span>
    </StyledEmptyContent>
  );
};

export default EmptyContent;
