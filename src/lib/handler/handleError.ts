import { AxiosError } from 'axios';
import { ApiError } from '../types/error';

export const handleErrorAlert = (err: any) => {
  if (err instanceof Error) {
    alert(err.message);
  }
};

export const getErrorResponseMsg = (err: any, errMsg: string) => {
  //에러 발생 시 서버에서 보내는 반환값에 메시지가 포함되어 있을 경우
  if (err instanceof AxiosError) {
    const errorResponse: ApiError = err.response?.data;
    return errorResponse.message;
  }
  //메시지가 없으면 프론트에서 작성한 메시지 반환
  return errMsg;
};
