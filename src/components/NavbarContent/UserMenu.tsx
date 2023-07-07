import {
  StyledMenu,
  StyledMenuLi,
} from '@/components/NavbarContent/StyledUserMenu';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { UserInfo } from '@/lib/types/auth';
import { forwardRef } from 'react';

const StorageName = 'userinfo';

const UserMenu = forwardRef<HTMLDivElement>(function UserMenu(_props, ref) {
  const storageData = useLocalStorage<UserInfo>(StorageName);
  const menu = [
    { name: '내 블로그', value: storageData?.name },
    { name: '설정', value: 'settings' },
    { name: '로그아웃', value: 'logout' },
  ];

  return (
    <StyledMenu ref={ref}>
      <ul>
        {menu.map((item) => (
          <StyledMenuLi
            key={item.name + item.value}
            onClick={() => console.log(item.value)}
          >
            {item.name}
          </StyledMenuLi>
        ))}
      </ul>
    </StyledMenu>
  );
});

export default UserMenu;
