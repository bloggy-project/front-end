export interface loginProps {
  email: string;
  pwd: string;
}

export interface joinProps extends loginProps {
  pwdConfirm: string;
  nickname: string;
}
