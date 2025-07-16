import gif from '../assets/images/el-gif.gif';
import {Box, Typography } from "@mui/material";

const Home = () => {

    return(
<>
<Typography variant='h1'> Raphaëlle </Typography>
        <Box
        key={1}
        component="img"
        src={gif}
        alt={`Illustration ${1}`}
        sx={{
          width: '40%',
          height: 'auto',
          objectFit: 'cover',
          marginTop: 3,
          
        }}
      />
      </>
    )
}

export default Home;