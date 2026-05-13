import { Box, Chip, Stack, Typography } from '@mui/material';

const ACTIVITY_COLORS: Record<string, { bg: string; color: string }> = {
  Skiing: { bg: '#E6F1FB', color: '#0C447C' },
  IceClimbing: { bg: '#EEEDFE', color: '#3C3489' },
  Camping: { bg: '#E1F5EE', color: '#085041' },
  Hiking: { bg: '#EAF3DE', color: '#27500A' },
};

const DEFAULT_COLOR = { bg: '#F1EFE8', color: '#444441' };

type Activity = keyof typeof ACTIVITY_COLORS;

interface ActivityEntry {
  day: number;
  endDay?: number;
  month: string;
  endMonth?: string;
  activity: Activity[];
  title: string;
  description: string;
  photos?: string[];
}

interface MonthGroup {
  month: string;
  items: ActivityEntry[];
}

const entries: MonthGroup[] = [
  {
    month: 'December',
    items: [
      {
        day: 6,
        endDay: 7,
        month: 'Dec',
        activity: ['IceClimbing'],
        title: 'Crawford Notch & Huntington Pass on Mount Washington',
        description: 'First time ice climbing - immediately got the barfies.',
        photos: [
          '/photos/embracingWinter/crawford.jpeg',
          '/photos/embracingWinter/pinnacle_am.png',
          '/photos/embracingWinter/huntington.jpeg',
        ],
      },
      {
        day: 13,
        month: 'Dec',
        activity: ['IceClimbing'],
        title: "Am's birthday at Lac Sylvere",
        description: 'Some wet wet ice, followed by Paddington',
        photos: ['/photos/embracingWinter/sylvere.jpeg'],
      },
      {
        day: 24,
        endDay: 28,
        month: 'Dec',
        activity: ['IceClimbing', 'Hiking'],
        title: 'St Alexis Des Monts Christmas Cabin',
        description: 'Winter walks & Mastigouche ice with Hao, Corey, Am, and Hamed',
        photos: [
          '/photos/embracingWinter/st_alexis.jpeg',
          '/photos/embracingWinter/hao.jpeg',
          '/photos/embracingWinter/st_alexis_2.jpeg',
        ],
      },
      {
        day: 31,
        endDay: 1,
        month: 'Dec',
        endMonth: 'Jan',
        activity: ['Camping', 'Hiking'],
        title: 'Mauricie Winter Camping and NYE Hotpot',
        description:
          "Moonlit snow and sleeping in -25 with NYE Hotpot celebration. Nicho's birthday. With Am, Hamed, Hao, Marcus, and Carly",
        photos: ['/photos/embracingWinter/mauricie.jpeg', '/photos/embracingWinter/hot_pot.jpeg'],
      },
    ],
  },
  {
    month: 'January',
    items: [
      {
        day: 4,
        month: 'Jan',
        activity: ['IceClimbing'],
        title: 'Shawbridge in -25',
        description: 'With Am, Hamed, and Marcus',
        photos: ['/photos/embracingWinter/shawbridge.jpeg'],
      },
      {
        day: 10,
        endDay: 11,
        month: 'Jan',
        activity: ['IceClimbing'],
        title: 'Malbaie Attempt',
        description: 'With Am, Hamed, Nicho, and Marcus',
        photos: ['/photos/embracingWinter/malbaie.jpeg', '/photos/embracingWinter/crosstrek.jpeg'],
      },
      {
        day: 17,
        month: 'Jan',
        activity: ['Skiing'],
        title: 'Cross Country Ski on Mont Royal',
        description: 'First time on xcountry skiis with Jyler, El, Tim, Laurie, and Harry',
        photos: ['/photos/embracingWinter/mont_royal_xc.jpeg'],
      },
      {
        day: 24,
        endDay: 25,
        month: 'Jan',
        activity: ['Camping'],
        title: 'Backpacking Cap360 in -30C',
        description: 'Character building, according to Hamed',
        photos: [
          '/photos/embracingWinter/cap360_view.jpeg',
          '/photos/embracingWinter/cap360.jpg',
          '/photos/embracingWinter/cap360_2.jpg',
        ],
      },
    ],
  },
  {
    month: 'February',
    items: [
      {
        day: 1,
        month: 'Feb',
        activity: ['IceClimbing'],
        title: 'First Ice Multi at Mt Barriere with Hamed',
        description: 'Sunny day out with Michael, Jay, Hamed, and Nicho',
        photos: [
          '/photos/embracingWinter/voyage_imaginaire.jpeg',
          '/photos/embracingWinter/champ_de_choufleur.jpeg',
        ],
      },
      {
        day: 9,
        month: 'Feb',
        activity: ['Skiing'],
        title: 'Baby Ski at Mont St Bruno with Nicho',
        description: 'Celeste loans, and learning to pizza and french fry',
        photos: ['/photos/embracingWinter/bruno.jpeg'],
      },
      {
        day: 14,
        month: 'Feb',
        activity: ['Hiking'],
        title: 'Val D walk with Maman',
        description: 'Microspikes and sunshine at Val David',
        photos: ['/photos/embracingWinter/vald.jpeg'],
      },
      {
        day: 28,
        month: 'Feb',
        activity: ['IceClimbing'],
        title: 'Opale with Nicho!',
        description: '3 pitches of ice! First time putting snowshoes on. Hard and beautiful!',
        photos: ['/photos/embracingWinter/opale.jpeg', '/photos/embracingWinter/opale2.jpeg'],
      },
    ],
  },
  {
    month: 'March',
    items: [
      {
        day: 15,
        month: 'Mar',
        activity: ['Skiing'],
        title: 'Bromont Night Ski with Friends',
        description: 'Blues and Blacks',
        photos: ['/photos/embracingWinter/bromont.jpeg', '/photos/embracingWinter/bromont2.jpeg'],
      },
      {
        day: 22,
        month: 'Mar',
        activity: ['Skiing'],
        title: 'Cross Country Ski at Gai-Luron',
        description: 'With Trevor and Celeste',
        photos: ['/photos/embracingWinter/gailuron.jpeg', '/photos/embracingWinter/gailuron2.jpeg'],
      },
    ],
  },
  {
    month: 'April',
    items: [
      {
        day: 3,
        endDay: 4,
        month: 'Apr',
        activity: ['Camping', 'Hiking'],
        title: 'Gals in Gosford',
        description: '33k and sleeping in a lean-to with Am and Celeste',
        photos: ['/photos/embracingWinter/gosford.jpeg', '/photos/embracingWinter/gosford2.jpeg'],
      },
      {
        day: 10,
        endDay: 11,
        month: 'Apr',
        activity: ['Camping'],
        title: 'Mont Tranchant Sleepover',
        description: 'Breakfast in St Come and sleeping in snow',
        photos: ['/photos/embracingWinter/tranchant.jpeg'],
      },
    ],
  },
];

const PhotoThumb = ({ src }: { src: string }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: 1,
        border: '0.5px solid',
        borderColor: 'divider',
        flexShrink: 0,
        bgcolor: 'grey.100',
      }}
    />
  );
};

const Entry = ({
  day,
  endDay,
  month,
  endMonth,
  activity,
  title,
  description,
  photos,
}: ActivityEntry) => (
  <Box sx={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 2, mb: 2.5 }}>
    <Box sx={{ textAlign: 'right', pt: '2px' }}>
      <Typography sx={{ fontSize: 22, fontWeight: 500, lineHeight: 1 }}>
        {endDay ? `${day}–${endDay}` : day}
      </Typography>
      <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: '2px' }}>
        {endMonth ? `${month}–${endMonth}` : month}
      </Typography>
    </Box>

    <Box sx={{ borderLeft: '0.5px solid', borderColor: 'divider', pl: 2 }}>
      <Box sx={{ mb: 0.75 }}>
        {activity.map((act) => {
          const { bg, color } = ACTIVITY_COLORS[act] ?? DEFAULT_COLOR;
          return (
            <Chip
              key={act}
              label={act}
              size="small"
              sx={{
                mr: 0.5,
                height: 20,
                fontSize: 11,
                fontWeight: 500,
                bgcolor: bg,
                color,
                '& .MuiChip-label': { px: 1 },
              }}
            />
          );
        })}
      </Box>
      <Typography sx={{ fontSize: 15, fontWeight: 500, mb: 0.5 }}>{title}</Typography>
      <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.6 }}>
        {description}
      </Typography>
      {photos && photos?.length > 0 && (
        <Stack direction="row" spacing={0.75}>
          {photos.map((src, i) => (
            <PhotoThumb key={i} src={src} />
          ))}
        </Stack>
      )}
    </Box>
  </Box>
);

const content = (
  <Box sx={{ maxWidth: 680, mx: 'auto', py: 2 }}>
    <Typography>A digital picture diary of the winter fun I got up to this year.</Typography>
    {entries.map(({ month, items }) => (
      <Box key={month}>
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'text.disabled',
            mt: 3,
            mb: 1.5,
            pb: 0.75,
            borderBottom: '0.5px solid',
            borderColor: 'divider',
          }}
        >
          {month}
        </Typography>
        {items.map((item, i) => (
          <Entry key={i} {...item} />
        ))}
      </Box>
    ))}
  </Box>
);

export default {
  slug: 'embracing-winter',
  title: '❄️ Embracing Winter',
  date: '2026-05-13',
  description: 'Finally learning how to lean into winter',
  tags: ['outside'],
  content,
};
