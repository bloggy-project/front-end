export const handleErrorAlert = (err: any) => {
  if (err instanceof Error) {
    alert(err.message);
  }
};
