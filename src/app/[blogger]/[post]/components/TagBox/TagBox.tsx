import {
  StyledTagBoxContainer,
  StyledTagBoxText,
  StyledTagBoxTextSpace,
  StyledTag,
} from './TagBox-Styled';

type TagListProps = {
  username: string;
  tagNames: string[];
};

const TagBox = ({ username, tagNames }: TagListProps) => {
  return (
    <StyledTagBoxContainer>
      <StyledTagBoxText>태그</StyledTagBoxText>
      <StyledTagBoxTextSpace>|</StyledTagBoxTextSpace>
      {tagNames.map((tag, index) => (
        <StyledTag key={tag + index} href={`${username}/${tag}`}>
          {tag}
        </StyledTag>
      ))}
    </StyledTagBoxContainer>
  );
};

export default TagBox;
