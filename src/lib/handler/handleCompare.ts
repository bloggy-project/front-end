export const handleCompareTwice = <T>(older: T, newer: T) => {
  if (older === newer) {
    throw new Error('common');
  }
};

// export const handleCompareErrMesage = <T = void>(
//   err: Error,
//   matchedMsg: string,
//   handleErr: T,
// ) => {
//   if (err.message === matchedMsg) {
//   }
// };
