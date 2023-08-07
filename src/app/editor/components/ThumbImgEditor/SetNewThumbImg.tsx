import { StyledInput } from '@/app/settings/components/ThumbSetting/ThumbMenu-Styled';
import Button from '@/components/Button/Button';
import { Effect } from '@/assets/color';
import { getPreSignedUrl, uploadImg } from '@/lib/api/aws';
import handleCdnPath from '@/lib/handler/handleCdnPath';
import { handleImgFilist } from '@/lib/handler/handleImgFile';
import postStore from '@/store/postStore';
import { ChangeEvent, useRef } from 'react';
import { handleErrorAlert } from '@/lib/handler/handleError';

type SetNewThumbImgProps = {
  isDisable: boolean;
  onDisable: () => void;
  notDisable: () => void;
};

const SetNewThumbImg = ({
  isDisable,
  onDisable,
  notDisable,
}: SetNewThumbImgProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const setPost = postStore((state) => state.setPost);

  const onClickUploadButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      onDisable();
      const fileList = event.target.files;
      const imgFile = handleImgFilist(fileList);
      if (imgFile) {
        const presignedUrl = await getPreSignedUrl(imgFile.name);
        await uploadImg(presignedUrl, imgFile);
        const postThumbImg = handleCdnPath(presignedUrl, 'post');
        setPost({ thumbnail: postThumbImg });
      }
    } catch (err) {
      handleErrorAlert(err);
    } finally {
      notDisable();
    }
  };

  return (
    <>
      <StyledInput
        type="file"
        spellCheck="false"
        ref={fileInputRef}
        accept="image/*"
        id="imageFile"
        onChange={onChangeFile}
      />
      <Button
        type="button"
        color={Effect.SELECTED}
        hover={'none'}
        size={'half'}
        content={'새 썸네일 업로드'}
        onClick={onClickUploadButton}
        disabled={isDisable}
      />
    </>
  );
};

export default SetNewThumbImg;
