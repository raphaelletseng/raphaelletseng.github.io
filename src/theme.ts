// src/theme.js
import { createTheme } from '@mui/material/styles';

export const LINK_COLOR = '#008B91';
export const LINK_HOVER_COLOR = '#005f63';

const theme = createTheme({
  palette: {
    primary: { main: LINK_COLOR },
    secondary: { main: '#dc004e' },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: LINK_COLOR,
          textDecorationColor: LINK_COLOR,
          '&:hover': {
            color: LINK_HOVER_COLOR,
            textDecorationColor: LINK_HOVER_COLOR,
          },
        },
      },
    },
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
