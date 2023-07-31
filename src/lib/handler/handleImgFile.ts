import { MsgAlert } from '@/assets/message';
import { MaxFileSizeMB } from '@/assets/size';

export const handleImgFile = (
  fileList: FileList | null,
  setImgFile: (img: string) => void,
): File | null => {
  if (fileList?.length) {
    let imgFile: File | null = null;

    Array.from(fileList).forEach((file) => {
      const fileType = file.type || file.name.split('.').pop()?.toLowerCase();

      if (fileType?.startsWith('image/')) {
        const fileSizeMB = file.size / (1024 * 1024);
        if (fileSizeMB > MaxFileSizeMB) {
          throw new Error(MsgAlert.File.exceededImgSize);
        }
        setImgFile(URL.createObjectURL(file));
        imgFile = file;
      } else {
        throw new Error(MsgAlert.File.notImgFile);
      }
    });

    return imgFile;
  }

  return null;
};
