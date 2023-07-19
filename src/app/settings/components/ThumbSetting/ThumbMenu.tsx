import { ChangeEvent, forwardRef } from 'react';
import {
  StyledThumbMenu,
  StyledLi,
  StyledInput,
  StyledLabel,
} from './ThumbMenu-Styled';
import { handleImgFile } from '@/lib/handler/handleImgFile';

type ThumbMenuProps = {
  setThumbnailImg: (img: string) => void;
  setDefaultThumbImg: () => void;
};

const ThumbMenu = forwardRef<HTMLUListElement, ThumbMenuProps>(
  function ThumbMenuComponent(
    { setThumbnailImg, setDefaultThumbImg }: ThumbMenuProps,
    ref,
  ) {
    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      handleImgFile(fileList, setThumbnailImg);
    };
    return (
      <StyledThumbMenu ref={ref}>
        <StyledLi>
          <StyledInput
            type="file"
            spellCheck="false"
            accept="image/*"
            id="imageFile"
            onChange={onChangeFile}
          />
          <StyledLabel htmlFor="imageFile">이미지 수정</StyledLabel>
        </StyledLi>
        <StyledLi onClick={setDefaultThumbImg}>기본 이미지</StyledLi>
      </StyledThumbMenu>
    );
  },
);

export default ThumbMenu;
