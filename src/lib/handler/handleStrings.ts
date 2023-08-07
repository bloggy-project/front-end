//undefined, null는 ''로, 값이 있는 문자열은 그대로 반환
export const getCheckedString = (string: undefined | null | string) => {
  if (string) {
    return string;
  } else {
    return '';
  }
};
//HTML문법을 걷어낸 문자열을 반환
export const convetHTMLtoString = (HTMLstring: string) => {
  return HTMLstring.replace(/<[^>]*>/g, '');
};
