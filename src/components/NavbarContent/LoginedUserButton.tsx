'use client';
import { useRef } from 'react';
import UserThumbnail from '../Thumbnail/UserThumbnail';
import useToggle from '@/hooks/useToggle';
import UserMenu from './UserMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import { StyledLoginedUserButton } from './LoginedUserButton-Styled';

const LoginedUserButton = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { isOpen, onChangeOpen } = useToggle(menuRef);

  return (
    <StyledLoginedUserButton ref={menuRef} onClick={onChangeOpen}>
      <UserThumbnail />
      <AiOutlineMenu />
      {isOpen && <UserMenu />}
    </StyledLoginedUserButton>
  );
};

export default LoginedUserButton;
