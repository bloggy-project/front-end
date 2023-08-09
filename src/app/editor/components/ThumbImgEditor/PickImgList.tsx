import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { StyledPickImgList } from './PickImgList-Styled';
import imageListStore from '@/store/imageListStore';
import { useCallback, useEffect, useState } from 'react';
import postStore from '@/store/postStore';

type PickImgListProps = {
  isDisable: boolean;
};

const PickImgList = ({ isDisable }: PickImgListProps) => {
  const imageList = imageListStore((state) => state.imageList);
  const setPost = postStore((state) => state.setPost);
  const [index, setIndex] = useState(0);
  const imgLastIndex = imageList.length ? imageList.length - 1 : 0;
  const imgFirstIndex = 0;

  const onClickAddImg = useCallback(() => {
    if (!isDisable) {
      if (index === imgLastIndex) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    }
  }, [index, imgLastIndex]);

  const onClickSubtractImg = useCallback(() => {
    if (!isDisable) {
      if (index === imgFirstIndex) {
        setIndex(imgLastIndex);
      } else {
        setIndex((index) => index - 1);
      }
    }
  }, [index, imgLastIndex]);

  useEffect(() => {
    setPost({ thumbnail: imageList[index] });
  }, [index]);

  return (
    <StyledPickImgList>
      <AiOutlineLeft onClick={onClickSubtractImg} />
      <p>내 포스트 이미지 {index + 1}</p>
      <AiOutlineRight onClick={onClickAddImg} />
    </StyledPickImgList>
  );
};

export default PickImgList;
