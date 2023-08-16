export const convertDateToDays = (date: string) => {
  const cuttedDate = date.split('T')[0];
  return cuttedDate;
};

export const convertDateToTimes = (date: string) => {
  const cuttedDateArr = date.split('T');
  const cuttedDate = cuttedDateArr[0];
  const cuttedTime = cuttedDateArr[1]
    .slice(0, 5)
    .replace(':', '시')
    .concat('분'); // Extract hours and minutes

  return `${cuttedDate} ${cuttedTime}`;
};
