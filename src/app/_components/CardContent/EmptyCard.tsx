import { Tabs } from '@/assets/keyword';
import { StyledEmptyContent } from './StyledEmptyContent';
import { MdContentPasteOff, MdPersonSearch } from 'react-icons/md';

const NotificationsContent = '게시글이 존재하지 않습니다';
const NotificationsBlogger = '블로거가 존재하지 않습니다';

type EmptyCardProps = {
  contentTheme: string;
};

const EmptyCard = ({ contentTheme }: EmptyCardProps) => {
  if (contentTheme === Tabs[0].label) {
    return (
      <StyledEmptyContent>
        <MdContentPasteOff />
        <p>{NotificationsContent}</p>
      </StyledEmptyContent>
    );
  } else {
    return (
      <StyledEmptyContent>
        <MdPersonSearch />
        <p>{NotificationsBlogger}</p>
      </StyledEmptyContent>
    );
  }
};

export default EmptyCard;
