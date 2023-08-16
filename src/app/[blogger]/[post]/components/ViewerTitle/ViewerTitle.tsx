import { convertDateToDays } from '@/lib/handler/handleDateTime';
import {
  StyledViewerTitle,
  StyledTitleText,
  StyledInfoBox,
  StyledInfoText,
  StyledInfoSpace,
} from './ViewerTitle-Styled';
import Link from 'next/link';

type ViewerTitleProps = {
  title: string;
  username: string;
  updatedAt: string;
};

const ViewerTitle = ({ title, username, updatedAt }: ViewerTitleProps) => {
  const cuttedDateTime = convertDateToDays(updatedAt);

  return (
    <StyledViewerTitle>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledInfoBox>
        <StyledInfoText $hover={true}>
          <Link href={`/${username}`}>{username}</Link>
        </StyledInfoText>
        <StyledInfoSpace>|</StyledInfoSpace>
        <StyledInfoText>{cuttedDateTime}</StyledInfoText>
      </StyledInfoBox>
    </StyledViewerTitle>
  );
};

export default ViewerTitle;
