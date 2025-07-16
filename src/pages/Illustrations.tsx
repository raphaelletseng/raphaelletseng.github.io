import { Box } from "@mui/material"
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img8 from '../assets/images/img8.png'
import gif1 from '../assets/images/el-gif.gif'
import img4 from '../assets/images/img4.png'
import blue4 from '../assets/images/blue4.png'
import img6 from '../assets/images/img6.png'
import img7 from '../assets/images/img7.png'
import img9 from '../assets/images/img9.png'


const images = [
   gif1, img2, img3, img1, img4, blue4, img6, img7, img8, img9
]

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
    )
}

export default Illustrations;