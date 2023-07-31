import { MaxFileSizeMB } from './size';

export const MsgPlaceholder = {
  email: '이메일을 입력해 주세요',
  password: '비밀번호를 입력해 주세요',
  pwdConfirm: '비밀번호를 다시 한 번 입력해주세요',
  name: '닉네임을 입력해 주세요',
  blogName: '블로그 이름을 입력해 주세요',
  description: '간단하게 자신을 소개해 주세요',
};

export const MsgAlert = {
  Login: {
    success: '로그인에 성공하였습니다.',
    fail: '로그인에 실패하였습니다. 다시 한 번 확인해 주세요.',
  },
  Join: {
    success: '회원가입이 완료되었습니다',
    fail: '로그인에 실패하였습니다. 다시 한 번 확인해 주세요.',
    usableName: '사용할 수 있는 닉네임입니다',
    disUseableName: '이미 존재하는 닉네임입니다',
  },
  Userinfo: {
    notExist: '해당 유저가 존재하지 않습니다. 다시 한 번 시도해주세요',
  },
  File: {
    failUploadS3: '파일 업로드에 실패했습니다. 재로그인 후 이용해주세요',
    notImgFile: '이미지 파일을 등록해 주세요',
    exceededImgSize: `${MaxFileSizeMB}MB 이하의 이미지를 등록해 주세요`,
  },
};
