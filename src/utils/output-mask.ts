// eslint-disable-next-line arrow-body-style
export const outputMask = (userNumber: string): string => {
  return `${userNumber.slice(0, 2)}-${userNumber.slice(2, 4)}-${userNumber.slice(4)}`;
};
