export interface loginProps {
  email: string;
  password: string;
}

export interface joinProps extends loginProps {
  pwdConfirm: string;
  name: string;
}
