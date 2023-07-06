import { getTokenByRefresh } from '@/lib/api/token';
import authStore from '@/store/authStore';
import { useEffect, useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import onTest from '@/lib/api/testApi';
import { getLocalStorage } from '@/lib/handler/handleUserInfo';

const LoginedButton = () => {
  return <div>테스팅</div>;
};

export default LoginedButton;
