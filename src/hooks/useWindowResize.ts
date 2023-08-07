import { useEffect, useState } from 'react';

const useWindowResize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return innerWidth;
};

export default useWindowResize;
