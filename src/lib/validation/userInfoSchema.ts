import * as yup from 'yup';
import { nameSchema } from './authSchame';

export const nameFormSchema = yup.object().shape({
  newName: nameSchema,
});

export const blognameFormSchema = yup.object().shape({
  newBlogname: yup
    .string()
    .min(2, '2자 이상으로 입력해 주세요')
    .max(12, '12자 이하로 입력해 주세요.'),
});

export const descriptionFormSchema = yup.object().shape({
  newDescription: yup.string().max(40, '40자 이하로 입력해 주세요.'),
});

export const emailFormSchema = yup.object().shape({
  newEmail: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      '이메일 형식에 일치하지 않습니다.',
    ),
});
