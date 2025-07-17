import gif from '../assets/images/el-gif.gif';
import raph from '../assets/images/raph.png';
import {Box, Typography } from "@mui/material";

const Home = () => {

    return(
<>
<Typography variant='h1'> Raphaëlle 曾 </Typography>
        <Box
        key={1}
        component="img"
        src={raph}
        alt={`Illustration ${1}`}
        sx={{
          width: {xs: '80%', sm: '40%'},
          height: 'auto',
          objectFit: 'cover',
          marginTop: 3,
          
        }}
      />
      </>
    )
}

export default Home;