import raph from '../assets/images/raph.png';
import { Box, Typography, Link } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="top"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Box
          key={1}
          component="img"
          src={raph}
          alt={`Raphaelle Tseng`}
          sx={{
            width: { xs: '100%', sm: '50%', md: '25%' },
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
            then, I&apos;ve worked in{' '}
            <Link href="https://www.ghgsat.com/en/" target="_blank" rel="noopener">
              methane mitigation
            </Link>
            ,{' '}
            <Link href="https://www.slalom.com/ca/en" target="_blank" rel="noopener">
              business and technology consulting
            </Link>
            , and been part of the{' '}
            <Link
              href="https://www.ai4goodlab.com/project/datallite/"
              target="_blank"
              rel="noopener"
            >
              AI4Good Lab
            </Link>
            . I have also volunteered for organisations like{' '}
            <Link
              href="https://www.eventscribe.net/2022/ESA/fsPopup.asp?Mode=posterinfo&PosterID=501783"
              target="_blank"
              rel="noopener"
            >
              Future Earth
            </Link>
            ,
            <Link
              href="https://sustainabilitydigitalage.org/digital-climate-projects/"
              target="_blank"
              rel="noopener"
            >
              {' '}
              Sustainability in the Digital Age
            </Link>
            , and{' '}
            <Link
              href="https://www.ai4goodlab.com/project/datallite/"
              target="_blank"
              rel="noopener"
            >
              Earth Hero
            </Link>
            . <br /> <br />
            Contact me at{' '}
            <Link href="mailto:raphaelletseng@gmail.com" target="_blank" rel="noopener">
              raphaelletseng@gmail.com
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
