import authStore from '@/store/authStore';
import { useRef } from 'react';
import UserThumbnail from './UserThumbnail';
import useToggle from '@/hooks/useToggle';
import UserMenu from './UserMenu';

const LoginedUserButton = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { isOpen, onChangeOpen } = useToggle(menuRef);
  return (
    <>
      <UserThumbnail thumbnail={''} name={''} onClick={onChangeOpen} />
      {isOpen && <UserMenu ref={menuRef} />}
    </>
  );
};

export default LoginedUserButton;
