'use client';
import authStore from '@/store/authStore';
import { StatusToken } from '@/assets/status';
import { notFound } from 'next/navigation';
import EditPost from './components/EditPost/EditPost';
import ModalEditor from './components/ModalEditor/ModalEditor';

const PageSettings = () => {
  const accessToken = authStore((state) => state.accessToken);
  if (accessToken === (StatusToken.Initial || StatusToken.No_token)) {
    notFound();
  } else {
    return (
      <div>
        <EditPost />
        <ModalEditor />
      </div>
    );
  }
};

export default PageSettings;
