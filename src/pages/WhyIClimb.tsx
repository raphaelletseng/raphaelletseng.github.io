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
        gridTemplateColumns: { xs: '1fr', md: 'repeat(6, 1fr)' },
        gap: 4,
        marginTop: 6,
        position: 'relative',
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
          textTransform: 'uppercase',
          gridColumn: { xs: '1 / -1', md: '1 / 5' },
          marginBottom: { xs: 2, md: 0 },
          zIndex: 2,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Why I Climb
      </MotionTypography>

      <MotionBox
        sx={{
          gridColumn: { xs: '1 / -1', md: '4 / 7' },
          marginTop: { xs: 0, md: '-60px' },
          zIndex: 1,
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <MotionImg src={rimou} alt="Rimou" />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: 1,
            fontFamily: 'Inter, sans-serif',
            textAlign: 'right',
          }}
        >
          {' '}
          Le Bas-St-Laurent, Été 2025
        </Typography>
      </MotionBox>

      {[
        { src: chek, caption: 'North Cheakamus, Été 2023', col: '1 / 4' },
        { src: kamou, caption: 'Kamouraska, Automne 2024', col: '4 / 7' },
        { src: dacks, caption: 'The Adirondacks, Automne 2024', col: '2 / 5' },
      ].map(({ src, caption, col }, index) => (
        <MotionBox
          key={caption}
          sx={{
            gridColumn: { xs: '1 / -1', md: col },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 + index * 0.1, ease: 'easeOut' }}
        >
          <MotionImg src={src} alt={caption} />
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginTop: 1,
              fontFamily: 'Inter, sans-serif',
              color: 'text.secondary',
            }}
          >
            {caption}
          </Typography>
        </MotionBox>
      ))}
    </Box>
  );
};

export default WhyIClimb;
