import { Typography, Box } from '@mui/material';
import summerOutsidePoster from '../../assets/images/v4_web.png';

const entries = [
  [
    '4 May',
    "Weir with Nick, on Dragon and the first 2 pitches of Black & White. Don't forget to bring enough draws.",
  ],
  [
    '16–19 May',
    'A wet, soggy Lac Long weekend, with a hike and swim in the rain. Camping in a deluge is character building.',
  ],
  ['25 May', 'First trad lead on mixed route at St Alph – Remember to Place Good Gear.'],
  [
    '8 June',
    'Mont Tranchant with Hao – Read the guidebook BEFORE getting on the multipitch – Multipitching 2 pitches is a right faff, but good to refresh your memory.',
  ],
  [
    '11–15 June',
    'Stoney Lake with Celeste, Joe, Corey, and Peanut – Lakes are good. Don’t start a war with beavers.',
  ],
  [
    '7 June – 6 July',
    'Gaspesie Roadtrip! Bring more than just bars on a backpack. The fastest way to get your shoes and socks to dry is by wearing them.',
  ],
  [
    '12 July',
    'Baldy – Even if it’s unfathomably hot and humid, you can still get up to something by combining forces. Some days you’ll fall on a 5.7 and that’s okay. Ice cream is always a good idea.',
  ],
  [
    '19 July',
    'Val David Mont King – First trad multipitch lead – your belayer can’t do much to help you. Trust your gut for route finding. Rope management is key.',
  ],
  ['14 Aug', 'Chamonix hike Lac Blanc – Elevation is hard. The mountains are beautiful.'],
  [
    '16 Aug',
    'Col de Montet – nutrition is key. Hike the uphills. Running downhill shreds your quads. A raclette is a good way to refill calories.',
  ],
  [
    '27 Aug',
    'Montreal – You can find elevation in Montreal if you try hard enough. Bring enough food.',
  ],
  [
    '29 Aug – 1 Sept',
    'Charlevoix – Learnt how to pack a backpack (stuff the sleeping bag in on top). Blueberries will slow you down. Carrying weight is rough, but taking off your backpack makes everything feel effortless.',
  ],
  [
    '7 Sept',
    'Val David – Bring support when waking up at 4:30am. Trying new things is fun. Running 30k can be fun.',
  ],
  [
    '14 Sept',
    "Weir with Nick to do all three pitches of Black & White – You've got to enjoy the process. Bring a picnic for the second ledge. Climbing an offwidth will never be elegant.",
  ],
  [
    '21 Sept',
    'Montreal Half Marathon – Set yourself goals, because you might surprise yourself by actually achieving them. Bubble tea and doughnuts are essential post-run treats.',
  ],
];

const content = (
  <Box sx={{ padding: 2 }}>
    <Box
      component="img"
      src={summerOutsidePoster}
      alt="Lessons From a Summer Outside"
      sx={{
        float: 'left',
        width: { xs: '100%', sm: '500px', md: '700px' },
        height: 'auto',
        marginRight: 3,
        marginBottom: 2,
        borderRadius: 1,
      }}
    />

    {entries.map(([date, text], index) => (
      <Typography key={index} variant="body1" sx={{ marginBottom: 2 }}>
        <strong>{date}:</strong> {text}
      </Typography>
    ))}
  </Box>
);

export default {
  slug: 'lessons-from-a-summer-outside',
  title: '☀️ Lessons From a Summer Outside',
  date: '2025-09-27',
  description: 'A recap and what I learnt from my summer adventures in 2025',
  tags: ['illustration', 'outside'],
  content,
};
