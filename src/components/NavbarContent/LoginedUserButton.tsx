'use client';
import { useEffect, useRef } from 'react';
import UserThumbnail from '../Thumbnail/UserThumbnail';
import useToggle from '@/hooks/useToggle';
import UserMenu from './UserMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import { StyledLoginedUserButton } from './LoginedUserButton-Styled';
import useGetUserInfo from '@/query/userinfo/useGetUserInfo';
import useThumbnail from '@/hooks/useThumbnail';
import authStore from '@/store/authStore';

const LoginedUserButton = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const accessToken = authStore((state) => state.accessToken);
  const { isOpen, onChangeOpen } = useToggle(menuRef);
  const { userInfo } = useGetUserInfo(accessToken);
  const { thumbnailImg, setThumbImg } = useThumbnail(userInfo?.thumbnail);

  useEffect(() => {
    if (userInfo) {
      setThumbImg(userInfo.thumbnail);
    }
  }, [userInfo]);

  if (userInfo) {
    return (
      <StyledLoginedUserButton ref={menuRef} onClick={onChangeOpen}>
        <UserThumbnail thumbnailImg={thumbnailImg} />
        <AiOutlineMenu />
        {isOpen && <UserMenu />}
      </StyledLoginedUserButton>
    );
  }
};

export default LoginedUserButton;
