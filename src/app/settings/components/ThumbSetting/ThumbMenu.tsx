import { ChangeEvent, forwardRef } from 'react';
import {
  StyledThumbMenu,
  StyledLi,
  StyledInput,
  StyledLabel,
} from './ThumbMenu-Styled';
import { handleImgFilist } from '@/lib/handler/handleImgFile';
import { getPreSignedUrl, uploadImg } from '@/lib/api/aws';
import handleCdnPath from '@/lib/handler/handleCdnPath';
import useChangeUserInfo from '@/query/userinfo/useChangeUserInfo';
import useDisable from '@/hooks/useDisable';

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
    const { isDisable, onDisable, notDisable } = useDisable();
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      try {
        onDisable();
        const fileList = event.target.files;
        const imgFile = handleImgFilist(fileList, setThumbnailImg);
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
      } finally {
        notDisable();
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
            disabled={isDisable}
          />
          <StyledLabel htmlFor="imageFile">
            {isDisable ? '수정 중...' : '이미지 수정'}
          </StyledLabel>
        </StyledLi>
        <StyledLi onClick={onChangeDefaultImg}>기본 이미지</StyledLi>
      </StyledThumbMenu>
    );
  },
);

export default ThumbMenu;
