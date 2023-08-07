import { MsgAlert } from '@/assets/message';
import { MaxFileSizeMB } from '@/assets/size';

export const handleImgFilist = (
  fileList: FileList | null,
  setImgFile?: (img: string) => void,
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
        if (setImgFile) {
          setImgFile(URL.createObjectURL(file));
        }

        imgFile = file;
      } else {
        throw new Error(MsgAlert.File.notImgFile);
      }
    });

    return imgFile;
  }

  return null;
};

export const handleImgFile = (
  file: File | Blob,
  setImgFile?: (img: string) => void,
): File | Blob => {
  const imgFile: File | Blob = file;
  if (file.type.startsWith('image/')) {
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MaxFileSizeMB) {
      throw new Error(MsgAlert.File.exceededImgSize);
    }
    if (setImgFile) {
      setImgFile(URL.createObjectURL(file));
    }
  } else {
    throw new Error(MsgAlert.File.notImgFile);
  }
  return imgFile;
};
