import { useState } from 'react';

const useSearch = () => {
  const [activeSearch, setActiveSearch] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setActiveSearch(value);
  };

  return {
    activeSearch,
    onSearch,
  };
};

export default useSearch;
