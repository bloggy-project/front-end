import { MsgAlert } from '@/assets/message';
import { apiPrivate, api } from '../config';

export const getPreSignedUrl = async (fileName: string) => {
  const { data } = await apiPrivate.post<string>('/pre-signed', { fileName });
  return data;
};

export const uploadImg = async (presignedUrl: string, file: File) => {
  try {
    await api.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      throw Error(MsgAlert.AWS.failUpload);
    }
  }
};
