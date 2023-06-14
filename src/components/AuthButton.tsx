import { StyledButton } from '@/styles/components/nav';

function AuthButton() {
  return <StyledButton>로그인 / 회원가입</StyledButton>;
}

export function AuthList() {
  return (
    <ul>
      <StyledButton />
    </ul>
  );
}

export default AuthButton;
