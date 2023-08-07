import Button from '@/components/Button/Button';
import postStore from '@/store/postStore';
import { Palette } from '@/assets/color';
import { shallow } from 'zustand/shallow';

type CancelThumbImgProps = {
  isDisable: boolean;
};

const CancelThumbImg = ({ isDisable }: CancelThumbImgProps) => {
  const { post, setPost } = postStore(
    (state) => ({ setPost: state.setPost, post: state.post }),
    shallow,
  );

  const getDisableByThumb = () => {
    if (post.thumbnail) {
      return false;
    } else {
      return true;
    }
  };

  const onClickDeleteThumb = () => {
    setPost({ thumbnail: '' });
  };

  return (
    <Button
      type="button"
      color={Palette.SPOT2_TEXT}
      hover={'none'}
      size={'half'}
      content={'썸네일 등록 취소'}
      onClick={onClickDeleteThumb}
      disabled={isDisable || getDisableByThumb()}
    />
  );
};

export default CancelThumbImg;
