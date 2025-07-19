import { Box } from '@mui/material';
//import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.png';
import img10 from '../assets/images/img10.png';
import gif1 from '../assets/images/el-gif.gif';
import img4 from '../assets/images/img4.png';
import blue4 from '../assets/images/blue4.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img9 from '../assets/images/img9.png';
import img11 from '../assets/images/img11.png';
import parc from '../assets/images/parc.jpeg';
import house2 from '../assets/images/house2.jpeg';
import house3 from '../assets/images/house3.jpeg';
import house4 from '../assets/images/house4.jpeg';

const images = [
  gif1,
  img2,
  img4,
  img6,
  img7,
  blue4,
  img9,
  house3,
  img11,
  house2,
  img3,
  parc,
  house4,
  img10,
];

const Illustrations = () => {
  return (
    <Box sx={{ padding: 1 }}>
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          gap: 3,
        }}
      >
        {images.map((src, index) => (
          <>
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Illustration ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                marginTop: 3,
              }}
            />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Illustrations;
