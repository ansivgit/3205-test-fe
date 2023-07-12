import React, { FC } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';

import { outputMask } from '../utils/output-mask';
import { FormState } from '../types/FormTypes';

type Props = {
  searchResult: FormState[] | null | [];
}

export const SearchResult: FC<Props> = ({ searchResult }) => {
  if (!searchResult) {
    return null;
  }

  const isEmptyResult = searchResult && !searchResult.length;

  const createData = (email: string, number: string): FormState => ({ email, number });
  const resultRows = searchResult.map((item: FormState) => createData(item.email, item.number));

  if (isEmptyResult) {
    return <div>User not found!</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ width: 0.97 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User Email</TableCell>
            <TableCell align="right">User Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultRows.map((user) => (
            <TableRow
              key={`${user.email}-${user.number}}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell align="right">{outputMask(user.number)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
