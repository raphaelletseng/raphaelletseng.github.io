import { Stack, AppBar, Typography, Toolbar } from "@mui/material"

const Nav = () => {
    return (
        <AppBar color="transparent">
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
                href="/about/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >About</Typography>
             <Typography
                href="/blog/" 
                component="a"
                sx={{
                color: 'black',
                fontWeight: 'bold',
                }}
            >Blog</Typography>
            </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;