import { apiPrivate } from '../config/index';

type accessTokenType = {
  accessToken: string;
};
//유형 매개변수 제한. data에서 하위 요소를 추출하기 위한 제네릭 구조
export const getTokenByRefresh = async <T extends accessTokenType>(): Promise<
  T['accessToken']
> => {
  const { data } = await apiPrivate.get<T>('/refresh');
  return data.accessToken;
};
