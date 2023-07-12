import { FormState } from '../types/FormTypes';

export const sendUserData = async (userData: FormState) => {
  const request = await fetch(
    '/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    },
  );

  const searchResult = await request.json();

  return searchResult;
};
