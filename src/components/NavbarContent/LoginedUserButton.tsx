'use client';
import authStore from '@/store/authStore';
import { useRef } from 'react';
import UserThumbnail from '../Thumbnail/UserThumbnail';
import useToggle from '@/hooks/useToggle';
import UserMenu from './UserMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import { StyledLoginedUserButton } from './StyledLoginedUserButton';

const LoginedUserButton = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { isOpen, onChangeOpen } = useToggle(menuRef);

  return (
    <StyledLoginedUserButton ref={menuRef} onClick={onChangeOpen}>
      <UserThumbnail thumbnail={''} name={''} />
      <AiOutlineMenu />
      {isOpen && <UserMenu />}
    </StyledLoginedUserButton>
  );
};

export default LoginedUserButton;
