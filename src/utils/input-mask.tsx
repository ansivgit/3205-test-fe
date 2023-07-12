import React, { ChangeEvent, forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Box, Input, FormControl } from '@mui/material';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumberMask = forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default function FormattedInputs() {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      <FormControl variant="standard">

        <Input
          value={value}
          onChange={handleChange}
          name="textmask"
          id="formatted-number-mask-input"
          inputComponent={NumberMask as any}
        />
      </FormControl>
    </Box>
  );
}
