import { MsgAlert } from '@/assets/message';

export const handleImgFile = (
  fileList: FileList | null,
  setImgFile: (img: string) => void,
) => {
  if (fileList?.length) {
    // Iterate through each file in the fileList
    Array.from(fileList).forEach((file) => {
      // Get the file type using the MIME type or extension
      const fileType = file.type || file.name.split('.').pop()?.toLowerCase();

      // Check if the file type is an image
      if (fileType?.startsWith('image/')) {
        // File is an image
        setImgFile(URL.createObjectURL(file));
      } else {
        // File is not an image
        alert(MsgAlert.notImgFile);
      }
    });
  }
};
