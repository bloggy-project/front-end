import { useState } from 'react';

const useThumbnail = (img: string | null | undefined) => {
  const default_thumbnail = '/default_thumbnail.png';

  const checkThumbnail = (img: string | null | undefined): string => {
    if (!img) {
      return default_thumbnail;
    }
    return img;
  };

  const [thumbnailImg, setThumbnailImg] = useState(checkThumbnail(img));

  const setDefaultImg = () => {
    setThumbnailImg(default_thumbnail);
  };

  const setThumbImg = (img: string | null | undefined) => {
    setThumbnailImg(checkThumbnail(img));
  };

  return {
    thumbnailImg,
    setThumbImg,
    setDefaultImg,
  };
};

export default useThumbnail;
