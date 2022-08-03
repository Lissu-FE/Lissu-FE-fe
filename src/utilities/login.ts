export const checkIdRegex = (id: string) => {
  const regex = /^[a-z0-9]{5,30}$/i;

  return regex.test(id);
};

export const checkPwRegex = (pw: string) => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/;

  return regex.test(pw);
};
