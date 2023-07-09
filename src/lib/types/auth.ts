export interface loginProps {
  email: string;
  password: string;
}

export interface joinProps extends loginProps {
  pwdConfirm: string;
  name: string;
}

export type loginApi = {
  thumbnail: null | string;
  name: string;
  accessToken: string;
  email: string;
};

export type UserInfo = {
  thumbnail: null | string;
  name: string;
  email: string;
};
