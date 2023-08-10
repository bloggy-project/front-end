'use client';
import {
  StyledMenu,
  StyledMenuLi,
} from '@/components/NavbarContent/StyledUserMenu';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { onLogout } from '@/lib/api/auth';
import { handleErrorAlert } from '@/lib/handler/handleError';
import { UserInfo } from '@/lib/types/auth';
import QueryKey from '@/query/key';
import authStore from '@/store/authStore';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

const StorageName = 'userinfo';

const UserMenu = () => {
  const storageData = useLocalStorage<UserInfo>(StorageName);
  const queryClient = useQueryClient();
  const clearAccessToken = authStore((state) => state.clearAccessToken);

  const handleLogout = async () => {
    try {
      await onLogout();
      clearAccessToken();
      queryClient.removeQueries([
        QueryKey.UserInfo,
        QueryKey.Post,
        QueryKey.TempPost,
      ]);
    } catch (err) {
      handleErrorAlert(err);
    }
  };

  const menu = [
    { name: '내 블로그', value: storageData?.name },
    { name: '게시글 작성', value: 'editor' },
    { name: '설정', value: 'settings' },
    {
      name: '로그아웃',
      value: '',
      onClick: handleLogout,
    },
  ];

  return (
    <StyledMenu>
      <ul>
        {menu.map((item) => (
          <Link key={item.name + item.value} href={`/${item.value}`} passHref>
            <StyledMenuLi
              style={{ borderBottom: 'solid 1px lightgray' }}
              onClick={item?.onClick}
            >
              {item.name}
            </StyledMenuLi>
          </Link>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default UserMenu;
