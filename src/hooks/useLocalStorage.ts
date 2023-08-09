import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/lib/handler/handleLocalStorage';
import handleToast from '@/lib/handler/handleToast';

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'custom';
  message?: string;
}

export const useLocalStorage = <T>(name: string, useToast?: ToastProps) => {
  const [localStorageData, setLocalStorageData] = useState<T | null>(null);

  useEffect(() => {
    const getStorageData = getLocalStorage<T>(name);
    if (getStorageData) {
      console.log('???');
      setLocalStorageData(getStorageData);
      useToast && handleToast({ ...useToast });
    }
  }, []);

  return localStorageData;
};
