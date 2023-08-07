import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(1, '1자 이상으로 입력해 주세요')
    .max(30, '30자 이하로 입력해 주세요.')
    .required('제목을 입력해 주세요.'),
  subContent: yup.string().max(120, '120자 이하로 입력해 주세요'),
});
