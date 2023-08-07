import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { StyledPickImgList } from './PickImgList-Styled';
import imgListStore from '@/store/imgListStore';
import { useCallback, useEffect, useState } from 'react';
import postStore from '@/store/postStore';

type PickImgListProps = {
  isDisable: boolean;
};

const PickImgList = ({ isDisable }: PickImgListProps) => {
  const imgList = imgListStore((state) => state.imgList);
  const setPost = postStore((state) => state.setPost);
  const [index, setIndex] = useState(0);
  const imgLastIndex = imgList.length ? imgList.length - 1 : 0;
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
    setPost({ thumbnail: imgList[index] });
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
