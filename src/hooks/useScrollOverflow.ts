import { useEffect } from 'react';

const useScrollOverflow = (trigger: boolean) => {
  useEffect(() => {
    if (trigger) {
      const hiddenScroll = () => {
        document.body.style.overflow = 'hidden'; // Disable body scrolling
      };
      hiddenScroll();
    } else {
      const autoScroll = () => {
        document.body.style.overflow = 'auto'; // Enable body scrolling
      };
      autoScroll();
    }
  }, [trigger]);
};

export default useScrollOverflow;
