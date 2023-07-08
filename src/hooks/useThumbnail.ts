import { useState } from 'react';

const useThumbnail = (img: string | null) => {
  const checkThumbnail = (img: string | null): string => {
    if (!img) {
      const default_thumbnail = '/default_thumbnail.png';
      return default_thumbnail;
    }
    return img;
  };

  const [thumbnailImg] = useState(checkThumbnail(img));

  return {
    thumbnailImg,
  };
};

export default useThumbnail;
