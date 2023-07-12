import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box, Button, FormControl, FormHelperText, Input, InputLabel,
} from '@mui/material';

import { SearchResult } from './searchResult.tsx';
import { sendUserData } from '../api/sendUserData';
import { emailValidator, userNumberValidator } from '../utils/input-validators';
import { NumberMask } from '../utils/input-mask.tsx';
import { FormState, ErrorsState } from '../types/FormTypes';

export const UserForm = () => {
  const initialFormState = {
    email: '',
    number: '',
  };

  const initialErrorsState = {
    emailError: false,
    numberError: false,
  };

  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<ErrorsState>(initialErrorsState);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const isEmailError = emailValidator(values.email);
  const isNumberError = userNumberValidator(values.number);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(null);
    setLoading(false);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    setErrors({
      emailError: isEmailError.isError,
      numberError: isNumberError.isError,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setValues(initialFormState);
    setErrors(initialErrorsState);

    const searchUserResult = await sendUserData(values);
    await setLoading(false);
    setSearchResult(searchUserResult);
  };

  useEffect(() => {
    emailValidator(values.email);
    userNumberValidator(values.number);
  }, [values]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <FormControl required error={errors.emailError && isEmailError.isError}>
        <InputLabel htmlFor="email-input">E-mail</InputLabel>
        <Input
          value={values.email}
          onChange={handleChange}
          name="email"
          id="email-input"
        />
        <FormHelperText id="error-email-text">{errors.emailError && isEmailError.errorMsg}</FormHelperText>
      </FormControl>

      <FormControl error={isNumberError.isError}>
        <InputLabel htmlFor="formatted-number-mask-input">User Number</InputLabel>
        <Input
          value={values.number}
          onChange={handleChange}
          name="number"
          id="formatted-number-mask-input"
          inputComponent={NumberMask as any}
        />
        <FormHelperText id="error-number-text">{isNumberError.errorMsg}</FormHelperText>
      </FormControl>

      <Button
        onClick={handleSubmit}
        disabled={isEmailError.isError || isNumberError.isError }
        variant="contained"
      >
        Submit
      </Button>

      {isLoading ? <div>Please, wait...</div> : < SearchResult searchResult={searchResult} />}
    </Box>
  );
};
