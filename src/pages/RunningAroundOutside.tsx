import { Typography, Box, styled } from '@mui/material';
import { motion, useReducedMotion } from 'motion/react';
import cham_1 from '../assets/running/cham_run2.jpg';
import cham_2 from '../assets/running/cham_run.jpg';
//import cham_3 from '../assets/running/cham_run3.jpg';
//import cabo from '../assets/running/cabodaroca.jpg';
import gaspe from '../assets/running/gaspesie.jpg';
import cap360 from '../assets/running/cap360.jpeg';
import lacblanc from '../assets/running/lacblanc.png';
import mtroyal from '../assets/running/mtroyal.jpg';
import bonaventure from '../assets/running/bonaventure.jpg';
import pinnacle from '../assets/running/pinnacle.jpg';
import pemi from '../assets/running/pemi.jpeg';
import langkawi from '../assets/running/langkawi.jpeg';

//const MotionTypography = motion(Typography);
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

const RunningAroundOutside = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(6, 1fr)' },
        gap: 2,
        marginTop: 1,
        position: 'relative',
        gridAutoFlow: 'row dense',
      }}
    >
      {/* Image Grid */}
      {[
        { src: cham_1, caption: 'Tête de Balme Chamonix', col: '1 / 5', row: '1 / 3' },
        // { src: cham_3, caption: '', col: '5 / 7', row: '2 / 3 ' },
      ].map(({ src, caption, col, row }, index) => (
        <MotionBox
          key={caption}
          sx={{
            gridColumn: { xs: '1 / -1', md: col },
            gridRow: { md: row },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            width: '100%',
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 + index * 0.1, ease: 'easeOut' }}
        >
          <MotionImg
            style={{ width: '100%', height: 'auto', display: 'block' }}
            src={src}
            alt={caption}
          />
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
      {[
        { src: pinnacle, caption: 'Pinnacle Gully', col: '1 / 3', row: '3 / 4' },
        { src: cham_2, caption: '', col: '4 / 6', row: '1 / 2', marginTop: 1 },
        { src: cap360, caption: 'Les Laurentides', col: '5 / 7', row: '3 / 4' },
        {
          src: gaspe,
          caption: 'Parc de la Gaspésie',
          col: '3 / 5',
          row: '3 / 4',
        },
        { src: lacblanc, caption: 'Lac Blanc Chamonix', col: '6 / 8', row: '2 / 4' },
        { src: mtroyal, caption: 'Mount Royal', col: '1 / 3', row: '4 / 5' },
        { src: bonaventure, caption: "L'île Bonaventure", col: '4 / 7', row: '4 / 5 ' },
        { src: langkawi, caption: 'Air Terjun Durian Perangin', col: '5/7', row: '5/5' },
        { src: pemi, caption: 'Pemigewasset Loop', col: '2/4', row: '5/5' },
      ].map(({ src, caption, col, row, marginTop }, index) => (
        <MotionBox
          key={caption}
          sx={{
            gridColumn: { xs: '1 / -1', md: col },
            gridRow: { md: row },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            width: '100%',
            marginTop: 2,
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 + index * 0.1, ease: 'easeOut' }}
        >
          <MotionImg
            style={{ width: '100%', height: 'auto', display: 'block', marginTop: marginTop || 0 }}
            src={src}
            alt={caption}
          />
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

export default RunningAroundOutside;
