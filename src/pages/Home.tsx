import raph from '../assets/images/raph.png';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      {/* <Typography variant="h1"> Raphaëlle 曾 </Typography> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        sx={{
          flexDirection: {
            xs: 'column', // stack on extra-small screens (phones)
            sm: 'row', // side by side on small screens and up
          },
        }}
      >
        <Box
          key={1}
          component="img"
          src={raph}
          alt={`Raphaelle Tseng`}
          sx={{
            width: { xs: '100%', sm: '80%', md: '25%' },
            order: { xs: 2, sm: 1 },
            height: 'auto',
            objectFit: 'contain',
            marginTop: 3,
          }}
        />
        <Box
          key={2}
          sx={{
            width: { xs: '100%', sm: '60%', md: '40%' },
            order: { xs: 1, sm: 2 },
            height: 'auto',
            objectFit: 'cover',
            marginTop: { xs: '1', sm: 3 },
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '2rem', // small screens
                sm: '3rem',
                md: '5rem', // medium screens and up
              },
            }}
          >
            Raphaëlle 曾
          </Typography>
          <Typography variant="body1" sx={{ margin: { sm: 1, md: 5 }, padding: 3 }}>
            Hi, I&apos;m Raph Tseng. I spend my time writing code, illustrating, and working on
            projects that support social impact and the mitigation of climate change. <br /> I can
            also be found running around outside and climbing rocks.
            <br /> <br /> I studied mathematics and computer science at McGill University. Since
            then, I&apos;ve worked in methane mitigation, business and technology consulting, and
            been part of the AI4Good Lab. I have also volunteered for organisations like Future
            Earth, Sustainability in the Digital Age, and Earth Hero. <br /> <br />
            Contact me at raphaelletseng@gmail.com.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
