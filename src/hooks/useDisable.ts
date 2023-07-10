import { loginApi } from '@/lib/types/auth';
import { useState } from 'react';

const useDisable = () => {
  const [isDisable, setIsDisable] = useState(false);

  const onDisable = () => {
    setIsDisable(true);
  };

  const notDisable = () => {
    setIsDisable(false);
  };

  const autoSetDisable = async (asyncFunc: Promise<void>) => {
    try {
      onDisable();
      await asyncFunc;
    } finally {
      notDisable();
    }
  };

  const autoSetDisableWithData = async <T>(
    asyncFunc: Promise<T>,
  ): Promise<T> => {
    try {
      onDisable();
      const data = await asyncFunc;
      return data;
    } finally {
      notDisable();
    }
  };

  return {
    isDisable,
    onDisable,
    notDisable,
    autoSetDisable,
    autoSetDisableWithData,
  };
};

export default useDisable;
