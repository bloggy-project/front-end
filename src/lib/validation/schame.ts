import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      '이메일 형식에 일치하지 않습니다.',
    ),
  pwd: yup
    .string()
    .required('비밀번호를 입력해 주세요')
    .min(6, '6자 이상으로 입력해 주세요.')
    .max(20, '20자 이하로 입력해 주세요.')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      '1자 이상의 특수문자가 포함되어 있어야 합니다.',
    ),
});

export const joinSchema = yup.object().shape({
  ...loginSchema.fields,
  pwdConfirm: yup
    .string()
    .oneOf([yup.ref('pwd')], '비밀번호가 일치하지 않습니다'),
  nickname: yup
    .string()
    .required('닉네임을 확인해 주세요.')
    .min(2, '2자 이상으로 입력해 주세요')
    .max(12, '12자 이하로 입력해 주세요.'),
});
