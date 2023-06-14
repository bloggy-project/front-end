import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import AuthButton, { AuthList } from '@/components/AuthButton';

// jest.mock('@/components/navBar/UserMenu', () => ({
//   //객체에서 key-value를 정의할 때와 비슷하다
//   UserMenuList: () => {
//     return (
//       <ul id="dummy-menu-list">
//         <li>
//           <button>My Page</button>
//         </li>
//         <li>
//           <button>LogOut</button>
//         </li>
//       </ul>
//     );
//   },
// }));

const user = UserEvent.setup();

describe('로그인/ 회원가입 버튼', () => {
  render(<AuthButton />);
  it('render', () => {
    const AuthButton = screen.getByRole('button', {
      name: '로그인 / 회원가입',
    });
    expect(AuthButton).toBeInTheDocument();
  });
  it('child render on click', async () => {});
});
