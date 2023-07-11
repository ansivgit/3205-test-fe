const errorsMessages = {
  REQUIRED_EMAIL: 'Email required',
  INVALID_EMAIL: 'Incorrect email address',
  DIGITS: 'Please, enter 6 digits',
};

type ErrorObj = {
  isError: boolean,
  errorMsg: string,
};

const noErrors = {
  isError: false,
  errorMsg: '',
};

export const emailValidator = (email: string): ErrorObj => {
  const regExpEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email.trim()) {
    return (
      {
        isError: true,
        errorMsg: errorsMessages.REQUIRED_EMAIL,
      }
    );
  }

  if (!regExpEmail.test(email)) {
    return (
      {
        isError: true,
        errorMsg: errorsMessages.INVALID_EMAIL,
      }
    );
  }

  return noErrors;
};

export const userNumberValidator = (userNumber: string): ErrorObj => {
  if (userNumber.length < 8 && userNumber.length !== 0) {
    return (
      {
        isError: true,
        errorMsg: errorsMessages.DIGITS,
      }
    );
  }

  return noErrors;
};
