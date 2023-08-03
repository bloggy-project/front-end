import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, '1자 이상으로 입력해 주세요')
    .max(30, '30자 이하로 입력해 주세요.'),
  tagNames: yup
    .string()
    .min(2, '1자 이상으로 입력해 주세요')
    .max(25, '25자 이하로 입력해 주세요.'),
});
