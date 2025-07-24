import { Box, Typography, styled } from '@mui/material';
import rimou from '../assets/climbing/rimou.jpeg';
import kamou from '../assets/climbing/kamou.jpg';
import { motion, useReducedMotion } from 'motion/react';
import chek from '../assets/climbing/chek.jpeg';
import dacks from '../assets/climbing/dacks.jpeg';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const MotionImg = styled(motion.img)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));

const WhyIClimb = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <MotionTypography
        variant="h2"
        sx={{
          fontFamily: 'Junction, serif',
          fontWeight: 300,
          fontSize: { xs: '2.5rem', md: '5rem' },
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 4,
          textTransform: 'uppercase',
          gridColumn: { md: '1 / -1' }, // span both columns on md and up
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Why I Climb
      </MotionTypography>
      <MotionBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <MotionImg
          src={rimou}
          alt="Rimou"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: 1,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Une plage du Bas St-Laurent, Été 2025
        </Typography>
      </MotionBox>
      <MotionBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <MotionImg src={chek} alt="Cheakamus" />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: 1,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          North Cheakamus, Été 2023
        </Typography>
      </MotionBox>
      <MotionBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <MotionImg src={kamou} alt="Kamou" />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: 1,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Kamouraska, Automne 2024
        </Typography>
      </MotionBox>
      <MotionBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <MotionImg src={dacks} alt="Adirondacks" />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: 1,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          The Adirondacks, Automne 2024
        </Typography>
      </MotionBox>
    </Box>
  );
};

export default WhyIClimb;
