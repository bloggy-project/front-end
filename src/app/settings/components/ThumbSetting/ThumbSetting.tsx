'use client';
import {
  StyledSingleFormContainer,
  StyledSingleForm,
  StyledErrMsg,
} from '@/components/Form/Form-Styled';
import { StyledThumbnailContainer } from '@/components/Thumbnail/UserThumbnail-Styled';
import useThumbnail from '@/hooks/useThumbnail';
import Image from 'next/image';
import {
  StyledImgSettingBtn,
  StyledImgSettingContainer,
  StyledImgErrorContainer,
} from './ThumbSetting-Styled';
import { IoSettingsOutline } from 'react-icons/io5';
import useToggle from '@/hooks/useToggle';
import { useRef } from 'react';
import ThumbMenu from './ThumbMenu';

type ThumbSettingProps = {
  thumbnail: string | null;
  name: string;
};

const ThumbSetting = ({ thumbnail, name }: ThumbSettingProps) => {
  const { thumbnailImg, setThumbImg, setDefaultImg } = useThumbnail(thumbnail);
  const menuRef = useRef<HTMLUListElement>(null);
  const { isOpen, onChangeOpen } = useToggle(menuRef);
  return (
    <StyledSingleFormContainer>
      <StyledSingleForm>
        <StyledImgSettingContainer>
          <StyledThumbnailContainer size="big">
            <Image src={thumbnailImg} alt={name} fill />
          </StyledThumbnailContainer>
          <StyledImgSettingBtn type="button" onClick={onChangeOpen}>
            <IoSettingsOutline />
          </StyledImgSettingBtn>
          {isOpen && (
            <ThumbMenu
              setThumbnailImg={setThumbImg}
              setDefaultThumbImg={setDefaultImg}
              ref={menuRef}
            />
          )}
        </StyledImgSettingContainer>
        <StyledImgErrorContainer>
          <StyledErrMsg>ㅁㅁ</StyledErrMsg>
        </StyledImgErrorContainer>
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default ThumbSetting;
