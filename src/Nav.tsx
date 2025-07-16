import { Stack, AppBar, Typography, Toolbar } from "@mui/material"

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
            >Home</Typography>
             <Typography
                href="/illustrations/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >Illustrations</Typography>
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