// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  typography: {
    // Body text (default)
    fontFamily: 'Roboto, sans-serif',

    // Override for each heading level
    h1: { fontFamily: 'Junction, sans-serif' },
    h2: { fontFamily: 'Junction, sans-serif' },
    h3: { fontFamily: 'Junction, sans-serif' },
    h4: { fontFamily: 'Junction, sans-serif' },
    h5: { fontFamily: 'Junction, sans-serif' },
    h6: { fontFamily: 'Junction, sans-serif' },
  },
  // Add other customizations here
});

export default theme;
