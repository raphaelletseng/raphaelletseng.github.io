import { Stack, AppBar, Typography, Toolbar } from '@mui/material';

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
