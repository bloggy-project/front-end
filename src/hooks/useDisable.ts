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

  return {
    isDisable,
    onDisable,
    notDisable,
    autoSetDisable,
  };
};

export default useDisable;
