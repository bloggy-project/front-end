import { ChangeEvent, forwardRef } from 'react';
import {
  StyledThumbMenu,
  StyledLi,
  StyledInput,
  StyledLabel,
} from './ThumbMenu-Styled';
import { handleImgFile } from '@/lib/handler/handleImgFile';
import { getPreSignedUrl, uploadImg } from '@/lib/api/aws';
import handleCdnPath from '@/lib/handler/handleCdnPath';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';

type ThumbMenuProps = {
  setThumbnailImg: (img: string) => void;
  setDefaultThumbImg: () => void;
};

const ThumbMenu = forwardRef<HTMLUListElement, ThumbMenuProps>(
  function ThumbMenuComponent(
    { setThumbnailImg, setDefaultThumbImg }: ThumbMenuProps,
    ref,
  ) {
    const changeUserInfo = useChangeUserInfo();
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      try {
        const fileList = event.target.files;
        const imgFile = handleImgFile(fileList, setThumbnailImg);
        if (imgFile) {
          const presignedUrl = await getPreSignedUrl(imgFile.name);
          await uploadImg(presignedUrl, imgFile);
          const thumbImgUrl = handleCdnPath(presignedUrl, 'thumb');
          changeUserInfo.mutate({ thumbnail: thumbImgUrl });
        }
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        }
      }
    };

    const onChangeDefaultImg = async () => {
      setDefaultThumbImg();
      changeUserInfo.mutate({ thumbnail: '' });
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
        <StyledLi onClick={onChangeDefaultImg}>기본 이미지</StyledLi>
      </StyledThumbMenu>
    );
  },
);

export default ThumbMenu;
