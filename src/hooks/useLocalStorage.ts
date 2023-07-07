import { useEffect, useState } from 'react';
import MyLocalStorage from '@/lib/handler/handleLocalStorage';

export const useLocalStorage = <T>(name: string, handleErr?: () => void) => {
  const [localStorageData, setLocalStorage] = useState<T | null>(null);

  useEffect(() => {
    setLocalStorage(new MyLocalStorage<T>(name).get());
  }, [name, handleErr]);

  return localStorageData;
};
