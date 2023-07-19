import { useState } from 'react';

const useThumbnail = (img: string | null) => {
  const default_thumbnail = '/default_thumbnail.png';
  const checkThumbnail = (img: string | null): string => {
    if (!img) {
      return default_thumbnail;
    }
    return img;
  };

  const [thumbnailImg, setThumbnailImg] = useState(checkThumbnail(img));

  const setDefaultImg = () => {
    setThumbnailImg(default_thumbnail);
  };

  const setThumbImg = (img: string) => {
    setThumbnailImg(img);
  };

  return {
    thumbnailImg,
    setThumbImg,
    setDefaultImg,
  };
};

export default useThumbnail;
