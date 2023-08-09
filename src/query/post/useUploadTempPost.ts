import { useMutation } from '@tanstack/react-query';
import { TempPost } from '@/lib/types/post';
import { uploadTempPost } from '@/lib/api/post';
import handleToast from '@/lib/handler/handleToast';
import { MsgAlert } from '@/assets/message';

const useUploadTempPost = () => {
  const mutation = useMutation({
    mutationFn: (tempPost: TempPost) => uploadTempPost(tempPost),
    onError: () => {
      handleToast({
        type: 'error',
        message: MsgAlert.Post.failTemp,
      });
    },
    onSuccess: () => {
      handleToast({
        type: 'success',
        message: MsgAlert.Post.successTemp,
      });
    },
  });

  return mutation;
};

export default useUploadTempPost;
