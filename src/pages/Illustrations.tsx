import { Box, IconButton, Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import { illustrationIndex } from '../assets/images/illustrationIndex';
import { KeyboardArrowLeft, KeyboardArrowRight, Close } from '@mui/icons-material';

const Illustrations = () => {
  const [currImageIndex, setCurrImageIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (currImageIndex === undefined) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCurrImageIndex(undefined);
      } else if (e.key === 'ArrowLeft') {
        handleArrowClick('left');
      } else if (e.key === 'ArrowRight') {
        handleArrowClick('right');
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [currImageIndex]);

  const handleArrowClick = (arrowType: 'left' | 'right') => {
    setCurrImageIndex((prev) => {
      const current = prev ?? 0;
      if (arrowType === 'left') {
        return current === 0 ? illustrationIndex.length - 1 : current - 1;
      } else {
        return current === illustrationIndex.length - 1 ? 0 : current + 1;
      }
    });
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          gap: 1,
        }}
      >
        {illustrationIndex.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Illustration ${index + 1}`}
            onClick={() => setCurrImageIndex(index)}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              marginTop: 3,
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          />
        ))}
      </Box>
      {currImageIndex !== undefined && (
        <Modal
          open={currImageIndex !== undefined}
          onClose={() => setCurrImageIndex(undefined)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            border: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
        >
          <>
            <IconButton
              onClick={() => setCurrImageIndex(undefined)}
              sx={{ position: 'absolute', top: 80, right: 16, zIndex: 10 }}
            >
              <Close />
            </IconButton>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '80vh',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <IconButton
                aria-label="delete"
                onClick={() => handleArrowClick('left')}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  zIndex: 10,
                }}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <Box
                component="img"
                src={illustrationIndex[currImageIndex]}
                sx={{
                  maxWidth: '80vw',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  margin: '0 auto',
                  display: 'block',
                }}
                alt={`Illustration${illustrationIndex[currImageIndex]}`}
              ></Box>
              <IconButton
                aria-label="delete"
                onClick={() => handleArrowClick('right')}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  zIndex: 10,
                }}
              >
                <KeyboardArrowRight />
              </IconButton>
            </Box>
          </>
        </Modal>
      )}
    </Box>
  );
};

export default Illustrations;
