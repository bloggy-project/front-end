'use client';
import {
  StyledSingleFormContainer,
  StyledSingleForm,
} from '@/components/Form/Form-Styled';
import { StyledThumbnailContainer } from '@/components/Thumbnail/UserThumbnail-Styled';
import useThumbnail from '@/hooks/useThumbnail';
import Image from 'next/image';
import {
  StyledImgSettingBtn,
  StyledImgSettingContainer,
} from './ThumbSetting-Styled';
import { IoSettingsOutline } from 'react-icons/io5';
import useToggle from '@/hooks/useToggle';
import { useRef } from 'react';
import ThumbMenu from './ThumbMenu';
import { UserInfo } from '@/lib/types/auth';

type ThumbSettingProps = {
  thumbnail: UserInfo['thumbnail'];
};

const ThumbSetting = ({ thumbnail }: ThumbSettingProps) => {
  const { thumbnailImg, setThumbImg, setDefaultImg } = useThumbnail(thumbnail);
  const menuRef = useRef<HTMLUListElement>(null);
  const { isOpen, onChangeOpen } = useToggle(menuRef);
  return (
    <StyledSingleFormContainer>
      <StyledSingleForm>
        <StyledImgSettingContainer>
          <StyledThumbnailContainer size="big">
            <Image src={thumbnailImg} alt={thumbnailImg} fill />
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
      </StyledSingleForm>
    </StyledSingleFormContainer>
  );
};

export default ThumbSetting;
