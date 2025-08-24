import { Box, Typography } from '@mui/material';
import GaspesieMap from '../assets/gaspesie/map.gif';

const Gaspesie = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, padding: 4 }}>
      <Typography variant="h1">Gaspesie</Typography>
      <Box sx={{ width: '50%', height: 'auto', marginTop: 2 }}>
        <img
          src={GaspesieMap}
          alt="Gaspesie Map"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
};

export default Gaspesie;
