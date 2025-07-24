import raph from '../assets/images/raph.avif';
import { Box, Typography, Link, styled } from '@mui/material';
import { motion, useReducedMotion } from 'motion/react';

const MotionTypography = motion(Typography);

const MotionImg = styled(motion.img)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    order: 2,
  },
  [theme.breakpoints.up('md')]: {
    width: '25%',
    order: 1,
  },
}));

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <MotionImg
          src={raph}
          alt={`Raphaelle Tseng`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ order: { xs: 2, sm: 1 } }}
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
          <MotionTypography
            initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            variant="h1"
            sx={{
              fontSize: {
                xs: '2rem', // small screens
                sm: '3rem',
                md: '5rem', // medium screens and up
              },
            }}
          >
            Raphaëlle 曾
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{ margin: { sm: 1, md: 5 }, padding: 3 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          >
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
            <Link href="https://github.com/EarthHeroOrg" target="_blank" rel="noopener">
              Earth Hero
            </Link>
            . <br /> <br />
            Contact me at{' '}
            <Link href="mailto:raphaelletseng@gmail.com" target="_blank" rel="noopener">
              raphaelletseng@gmail.com
            </Link>
            .
          </MotionTypography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
