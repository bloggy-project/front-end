import { apiPrivate } from '../config';
const onTest = async () => {
  const { data } = await apiPrivate.post('/test');
  return data;
};

export default onTest;
