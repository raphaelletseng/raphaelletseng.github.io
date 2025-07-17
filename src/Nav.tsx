import { Stack, AppBar, Typography, Toolbar, Box } from "@mui/material"
import about from './assets/text/about.svg'
import illus from './assets/text/illus.svg'

const Nav = () => {
    return (
        <AppBar sx={{backgroundColor: 'white', boxShadow: 'none'}}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'center',}}>
        <Stack direction="row" spacing={12} sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <Typography
                href="/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >曾</Typography>
            {/* <Box component="a" href="/"> 
             <Box
                key={1}
                component="img"
                src={about}
            alt={`Illustration ${1}`}
            sx={{
                height: '3rem',
                padding: 2,
          width: 'auto',
          objectFit: 'cover',
          
        }}
      />
      </Box> */}
      {/* <Box component="a" href="/illustrations"> 
             <Box
                key={1}
                component="img"
                src={illus}
            alt={`Illustration ${1}`}
            sx={{
                height: '3rem',
                padding: 2,
          width: 'auto',
          objectFit: 'cover',
          
        }}
      />
      </Box> */}
             <Typography
                href="/illustrations/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >work</Typography>
             {/* <Typography
                href="/blog/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >Blog</Typography> */}
            </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;