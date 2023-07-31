'use client';
import authStore from '@/store/authStore';
import Settings from './components/Settings/Settings';
import { StatusToken } from '@/assets/status';
import { notFound } from 'next/navigation';

const PageSettings = () => {
  const accessToken = authStore((state) => state.accessToken);
  if (accessToken === (StatusToken.Initial || StatusToken.No_token)) {
    notFound();
  } else {
    return <Settings />;
  }
};

export default PageSettings;
