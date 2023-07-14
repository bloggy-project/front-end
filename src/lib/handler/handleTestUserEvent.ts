import UserEvent from '@testing-library/user-event';

export const handleClearElements = (elementArr: Array<HTMLElement>) => {
  if (elementArr.length) {
    elementArr.forEach(async (val) => await UserEvent.clear(val));
  }
};
