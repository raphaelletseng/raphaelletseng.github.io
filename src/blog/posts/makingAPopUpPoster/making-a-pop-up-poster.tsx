import { Typography, Box, ImageList, ImageListItem, Link, Divider } from '@mui/material';
import eggs from './eggs.jpeg';
import isma from './isma.jpeg';
import ismaMenu from './menus-ig.jpeg';
import bw from './bw.png';
import closeup from './closeup.png';
import green from './green.png';
import pink from './pink.png';
import text1 from './text.jpeg';
import text2 from './text2.jpeg';
import food2 from './food2.jpeg';

import blue3 from './v2/blue3.png';
import bw33 from './v2/bw33.png';
import orange from './v2/orange.png';
import pinkposter from './v2/pink.png';
import slice1 from './v2/slice1.png';
import v1Sundays from './v2/v1_sundays.2.png';
import xyz from './v2/xyz.png';

import menu1 from './menu/menu_bw_v2.png';
import menu2 from './menu/menu_colv4.png';
import menu_final from './menu/menus2.jpeg';

const assets = [bw, closeup, green, pink, text1, text2];
const posters = [blue3, bw33, pinkposter, slice1, v1Sundays, xyz];

const content = (
  <Box>
    <Box>
      <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="body1">
            In April, I designed some posters and menus for a restaurant popup by Eddie and MA at
            Bona Fide. <br /> <br />
            I’ve have had dinner at MA’s in the past. Whether it’s in the backyard summer sunshine
            or the cosy candle lit warmth of his dining room in the winter, it’s always a guaranteed
            wonderful time. Every piece of furniture is suddenly transformed into a chair in an
            attempt to squish as many humans as possible around a table teeming with plates of
            delicious food and open bottles of wine. I wanted to try and convey the atmosphere at
            one of his dinner parties and make something handcrafted with care for the poster he
            asked me to make for his popup,{' '}
            <Link href="https://www.instagram.com/sunday_souper/" rel="noopener" target="_blank">
              Sunday’s Souper
            </Link>
            .
            <br /> <br />
            The event sold out in a few hours and I was happy to be a{' '}
            <Link
              href="https://www.instagram.com/sunday_souper/p/DIM42FCRiEL/"
              rel="noopener"
              target="_blank"
            >
              small part of it
            </Link>
            .
          </Typography>
        </Box>
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <img
            src={orange}
            alt="final poster"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
        The process.{' '}
      </Typography>
      I made some initial assets in pencil, before passing the illustrations into Affinity and
      Inkscape to experiment with colours.
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={3}>
        {assets.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item}`}
              src={`${item}`}
              alt={`${assets[index]} poster`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      And then I mocked some posters. I wanted to give MA and Eddie options to choose from, ranging
      from more clean cut to pastel hand drawn.
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={3}>
        {posters.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item}`}
              src={`${item}`}
              alt={`${posters[index]} poster`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      I also made some menu options, drawing alpine crocuses because Eddie and MA met in the
      mountains out west, and in the spring time, these flowers grow out of the late snow.
      <Box sx={{ display: 'flex', padding: 0, height: '500px' }}>
        <Box sx={{ flex: 1 }}>
          <img
            src={menu1}
            alt="menu1"
            style={{
              width: 'auto',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Box sx={{ flex: 1, paddingLeft: 2, height: '500px' }}>
          <img
            src={menu2}
            alt="menu2"
            style={{
              width: 'auto',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Box sx={{ flex: 1, paddingLeft: 2, height: '500px' }}>
          <img
            src={menu_final}
            alt="menu final"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
    <Divider sx={{ marginBottom: 2 }} />
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginBottom: 1 }}>
      <Box sx={{ flex: 1, paddingRight: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Typography
          variant="body1"
          sx={{ flex: 1, paddingRight: 1, textAlign: 'left', marginBottom: 2 }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Images from the night of the event:{' '}
          </Typography>
          Late afternoon light through the front windows casting blue shadows and golden glows
          across the silverware and chalkboard wine list.
          <br /> Sunlight slowly getting replaced with tea lights and candles. <br />
          The clink of glassware, and wine being poured and passed around. <br />A perfectly curated
          pastel rainbow of food, each plate more beautiful and delicious than the last. <br />
          Warm laughter and chatter contained by the soft wood panelling of the room. <br />
          Getting up and switching chairs, new tables, meeting new friends.
          <br /> Lingering by the door at the end of the night, before biking home in the dark,
          bellies full and content.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 1 }}>
        <img
          src={eggs}
          alt="eggs"
          style={{
            width: '100%',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
          }}
        />
      </Box>
    </Box>
    <Box sx={{ display: 'flex', padding: 0, height: '500px' }}>
      <Box sx={{ flex: 1 }}>
        <img
          src={isma}
          alt="isma"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2, height: '500px' }}>
        <img
          src={ismaMenu}
          alt="Menu"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2, height: '500px' }}>
        <img
          src={food2}
          alt="moi"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default {
  slug: 'url',
  title: "Sunday's Souper: Making a Pop-Up Poster",
  date: '2025-04-20',
  description: "Creating art for Sunday's by MA & Eddie",
  tags: ['art', 'life'],
  content,
};
