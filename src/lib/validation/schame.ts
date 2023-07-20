import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      '이메일 형식에 일치하지 않습니다.',
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해 주세요')
    .min(6, '6자 이상으로 입력해 주세요.')
    .max(20, '20자 이하로 입력해 주세요.')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      '1자 이상의 특수문자가 포함되어 있어야 합니다.',
    ),
});

export const joinFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      '이메일 형식에 일치하지 않습니다.',
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해 주세요')
    .min(6, '6자 이상으로 입력해 주세요.')
    .max(20, '20자 이하로 입력해 주세요.')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      '1자 이상의 특수문자가 포함되어 있어야 합니다.',
    ), //기존   ...loginSchema.fields, 를 통한 복사 방법은 useForm에서 인식이 안됨
  pwdConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 다시 한 번 입력해 주세요'),
  name: yup
    .string()
    .required('닉네임을 입력해 주세요.')
    .min(2, '2자 이상으로 입력해 주세요')
    .max(12, '12자 이하로 입력해 주세요.'),
});

export const nameSchema = yup
  .string()
  .required('닉네임을 입력해 주세요.')
  .min(2, '2자 이상으로 입력해 주세요')
  .max(12, '12자 이하로 입력해 주세요.');

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
  newDescription: yup.string().max(30, '30자 이하로 입력해 주세요.'),
});
