import { MsgAlert } from '@/assets/message';

export const handleImgFile = (
  fileList: FileList | null,
  setImgFile: (img: string) => void,
): File | null => {
  if (fileList?.length) {
    let imgFile: File | null = null;

    // Iterate through each file in the fileList
    Array.from(fileList).forEach((file) => {
      // Get the file type using the MIME type or extension
      const fileType = file.type || file.name.split('.').pop()?.toLowerCase();

      // Check if the file type is an image
      if (fileType?.startsWith('image/')) {
        // File is an image
        setImgFile(URL.createObjectURL(file));
        imgFile = file;
      } else {
        // File is not an image
        throw new Error(MsgAlert.notImgFile);
      }
    });

    return imgFile;
  }

  return null; // Return null if no files are provided in fileList
};
