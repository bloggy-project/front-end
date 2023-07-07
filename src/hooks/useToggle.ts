import { useState, RefObject, useEffect } from 'react';

const useToggle = (ref?: RefObject<HTMLElement>) => {
  const [isOpen, setIsOpen] = useState(false);

  const onChangeOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeByOutside = (e: MouseEvent) => {
    if (ref?.current && !ref.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const closeOnly = () => {
    setIsOpen(false);
  };

  const onpenOnly = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (ref) {
      document.addEventListener('mousedown', closeByOutside);
      return () => {
        document.removeEventListener('mousedown', closeByOutside);
      };
    }
  }, [ref?.current]);

  return {
    isOpen,
    onChangeOpen,
    closeOnly,
    onpenOnly,
  };
};

export default useToggle;
