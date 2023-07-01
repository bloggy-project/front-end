import { useState } from 'react';

const useCheckStrings = () => {
  const [isCheckedStrings, setCheckedStrings] = useState('');

  const onSetStrings = (strings: string) => {
    setCheckedStrings(strings);
  };

  const onClearStrings = () => {
    setCheckedStrings('');
  };

  return {
    isCheckedStrings,
    onSetStrings,
    onClearStrings,
  };
};

export default useCheckStrings;
