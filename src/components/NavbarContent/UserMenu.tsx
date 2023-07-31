'use client';
import {
  StyledMenu,
  StyledMenuLi,
} from '@/components/NavbarContent/StyledUserMenu';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { UserInfo } from '@/lib/types/auth';
import Link from 'next/link';

const StorageName = 'userinfo';

const UserMenu = () => {
  const storageData = useLocalStorage<UserInfo>(StorageName);
  const menu = [
    { name: '내 블로그', value: storageData?.name },
    { name: '설정', value: 'settings' },
    { name: '로그아웃', value: '', onClick: () => console.log() },
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
