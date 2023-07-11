import React from 'react';
import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { UserForm } from './components/form.tsx';
import { UserData } from './components/result.tsx';

function App() {
  return (
    <div className="App">
      <h2>Test task for 3205 team</h2>
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', paddingTop: 5 }}>
            <UserForm />
            <UserData />
          </Box>
        </Container>
      </>
    </div>
  );
}

export default App;
