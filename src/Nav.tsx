import { Stack, AppBar, Typography, Toolbar } from '@mui/material';
import { LINK_HOVER_COLOR } from './theme';

const Nav = () => {
  return (
    <AppBar sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack direction="row" spacing={12} sx={{ flexGrow: 1, justifyContent: 'center' }}>
          <Typography
            variant="h6"
            href="/"
            component="a"
            sx={{
              color: 'black',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: LINK_HOVER_COLOR,
              },
            }}
          >
            曾
          </Typography>
          <Typography
            href="/#/blog/"
            variant="h6"
            component="a"
            sx={{
              color: 'black',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: LINK_HOVER_COLOR,
              },
            }}
          >
            notes
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
