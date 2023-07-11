// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box, Button, FormControl, FormHelperText, Input, InputLabel,
} from '@mui/material';

import { emailValidator, userNumberValidator } from '../utils/input-validators';
import { NumberMask } from '../utils/input-mask.tsx';

interface FormState {
  email: string,
  numberMask: string;
}

interface ErrorsState {
  email: boolean,
  numberMask: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const UserForm = () => {
  const [values, setValues] = useState<FormState>({
    email: '',
    numberMask: '',
  });

  const [errors, setErrors] = useState<ErrorsState>({
    email: false,
    numberMask: false,
  });

  const emailError = emailValidator(values.email);
  const userNumberError = userNumberValidator(values.numberMask);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    setErrors({
      email: emailError.isError,
      numberMask: userNumberError.isError,
    });
  };

  useEffect(() => {
    emailValidator(values.email);
    userNumberValidator(values.numberMask);
  }, [values]);

  const getData = (email) => {
    console.log(email);

    const response = fetch(
      `/${email}`,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(email),
      },
    )
      .then((res) => res.json())
      .then((data) => data.map((item) => console.log('item', item)));

    console.log(response);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <FormControl required error={errors.email && emailError.isError}>
        <InputLabel htmlFor="email-input">E-mail</InputLabel>
        <Input
          value={values.email}
          onChange={handleChange}
          name="email"
          id="email-input"
        />
        <FormHelperText id="error-email-text">{errors.email && emailError.errorMsg}</FormHelperText>
      </FormControl>

      <FormControl error={userNumberError.isError}>
        <InputLabel htmlFor="formatted-number-mask-input">User Number</InputLabel>
        <Input
          value={values.numberMask}
          onChange={handleChange}
          name="numberMask"
          id="formatted-number-mask-input"
          inputComponent={NumberMask as any}
        />
        <FormHelperText id="error-number-text">{userNumberError.errorMsg}</FormHelperText>
      </FormControl>

      <Button
        onClick={() => getData(values.email)}
        disabled={emailError.isError || userNumberError.isError }
        variant="contained"
      >
        Submit
      </Button>

    </Box>
  );
};
