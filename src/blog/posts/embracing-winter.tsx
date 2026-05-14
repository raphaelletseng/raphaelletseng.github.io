import { Box, Chip, Stack, Typography } from '@mui/material';

const ACTIVITY_COLORS: Record<string, { bg: string; color: string }> = {
  Skiing: { bg: '#DBEAFE', color: '#1D4ED8' },
  'Ice Climbing': { bg: '#EDE9FE', color: '#6D28D9' },
  Camping: { bg: '#D1FAE5', color: '#065F46' },
  Hiking: { bg: '#FEF3C7', color: '#B45309' },
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
        activity: ['Ice Climbing'],
        title: 'Crawford Notch & Huntington Ravine',
        description:
          "First time ice climbing - immediately got the barfies. We didn't do Pinnacle but we took the tools to the base and got to experience the beauty of Mount Washington! A lot of laughs eating ramen in the motel and watching Paddington 2 with Nick and Am. Will have to return!",
        photos: [
          '/photos/embracingWinter/crawford.jpeg',
          '/photos/embracingWinter/pinnacle_am.png',
          '/photos/embracingWinter/huntington.jpeg',
        ],
      },
      {
        day: 13,
        month: 'Dec',
        activity: ['Ice Climbing'],
        title: "Am's birthday at Lac Sylvère",
        description:
          "Some wet, wet ice at Lac Sylvère followed by a romp through the deep, fluffy snow for Am's birthday. With Amandine and Nicholas.",
        photos: ['/photos/embracingWinter/sylvere.jpeg', '/photos/embracingWinter/sylvere2.jpeg'],
      },
      {
        day: 24,
        endDay: 28,
        month: 'Dec',
        activity: ['Ice Climbing', 'Hiking'],
        title: 'Noel at St-Alexis-Des-Monts',
        description:
          "Christmas spent at a rustic chalet near St-Alexis-Des-Monts with Hao, Hamed, Corey, and Am. Days of winter walks, snow angels, and snowball fights. Warming toes by the fire and puzzling over hot chocolate. Managed a gloriously sunny day at Mastigouche, where Hamed's pointers massively helped my technique.",
        photos: [
          '/photos/embracingWinter/st_alexis.jpeg',
          '/photos/embracingWinter/hao.jpeg',
          '/photos/embracingWinter/mastigouche.jpeg',
          '/photos/embracingWinter/mastigouche_cold.jpeg',
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
          "Who needs clubbing and staying up til midnight when you can have hotpot with your friends over a campfire, and sleep under piles and piles of down with hot water bottles, toe warmers, and wool base layers. Moonlit snow meant we didn't need headlamps in the dark, and there's nothing like climbing out of a tent in -20C to go pee. Celebrated Nick's birthday, and enjoyed a gorgeous New Year's Day Walk with Am, Hamed, Hao, Marcus, and Carly",
        photos: [
          '/photos/embracingWinter/mauricie.jpeg',
          '/photos/embracingWinter/hot_pot.jpeg',
          '/photos/embracingWinter/nye_camping.jpeg',
          '/photos/embracingWinter/mauricie2.jpeg',
        ],
      },
    ],
  },
  {
    month: 'January',
    items: [
      {
        day: 4,
        month: 'Jan',
        activity: ['Ice Climbing'],
        title: 'Shawbridge in -25°C',
        description:
          "Just Marcus yelling 'Higher!' and 'Hips IN!' as I wriggled my way up Devil's Tooth. Freezing on the belay in -25°C weather. With Am, Hamed, and Marcus.",
        photos: [
          '/photos/embracingWinter/shawbridge.jpeg',
          '/photos/embracingWinter/cold_shawbridge.jpeg',
        ],
      },
      {
        day: 10,
        endDay: 11,
        month: 'Jan',
        activity: ['Ice Climbing'],
        title: 'Malbaie Triolet Attempt',
        description:
          'Dreams of doing Triolet dashed by an icy drive into the Hautes Gorges. Crosstrek in the ditch at 6am, but unexpected twists always make for a memorable epic (even if not the sort we were anticipating). Lots of walks and chats with Am, Hamed, Nick, and Marcus as we waited for the tow truck. Crêpes in Québec to make up for it all. Will have to come back for this one too. ',
        photos: [
          '/photos/embracingWinter/malbaie.jpeg',
          '/photos/embracingWinter/crosstrek.jpeg',
          '/photos/embracingWinter/hautes_gorges.jpeg',
        ],
      },
      {
        day: 17,
        month: 'Jan',
        activity: ['Skiing'],
        title: 'Cross Country Ski on Mont Royal',
        description:
          'First time on cross-country skiis with Jyler, El, Tim, Laurie, and Harry. Rentals from Beaver Lake. Going up is easier than going down.',
        photos: ['/photos/embracingWinter/mont_royal_xc.jpeg'],
      },
      {
        day: 24,
        endDay: 25,
        month: 'Jan',
        activity: ['Camping'],
        title: 'Backpacking Cap360 in -32°C',
        description:
          "The weather forecast said -32°C and Am said 'Aren't we lucky that we get to experience these temperatures? We MUST make the most of it!'. Hamed says suffering is character building. It literally snowed inside our tent. Putting frozen boots on in the morning is a special, special feeling for your toes.",
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
        activity: ['Ice Climbing'],
        title: 'First Ice Multipitch at Mt Barriere with Hamed',
        description:
          'Sunny day out with Michael, Jay, Hamed, and Nick. Nick forget his harness so soloed Voyage Imaginarie with us. Champ de Choufleur also a lot of fun.',
        photos: [
          '/photos/embracingWinter/voyage_imaginaire.jpeg',
          '/photos/embracingWinter/champ_de_choufleur.jpeg',
        ],
      },
      {
        day: 9,
        month: 'Feb',
        activity: ['Skiing'],
        title: 'Baby Night Ski at Mont St Bruno',
        description:
          'Grateful for friends who lend you gear (Celeste), and for patient teachers (Nicho). Learnt to pizza and french fry, and ended the night on blues and greens.',
        photos: ['/photos/embracingWinter/bruno.jpeg'],
      },
      {
        day: 14,
        month: 'Feb',
        activity: ['Hiking'],
        title: 'Val D walk with Maman',
        description:
          'Microspikes and sunshine at Val David - getting to show Maman the beauty of Winter with a walk through the park.',
        photos: ['/photos/embracingWinter/vald.jpeg', '/photos/embracingWinter/vald2.jpeg'],
      },
      {
        day: 28,
        month: 'Feb',
        activity: ['Ice Climbing'],
        title: 'Opale with Nicho!',
        description:
          '3 pitches of ice! Absolutely COOKED at the top. First time putting snowshoes on. Opale is beautiful, will have to return for Topaze! Grateful for climbing partners who lead and drive :)',
        photos: [
          '/photos/embracingWinter/opale.jpeg',
          '/photos/embracingWinter/opale2.jpeg',
          '/photos/embracingWinter/opale_approach.jpeg',
        ],
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
        description:
          'Nothing like some good friends to bamboozle you into skiing down a black diamond by mistake. The skiing progress appears exponential. With Trevor, Joe, Celeste, Ben, Sam, and Michelle.',
        photos: [
          '/photos/embracingWinter/bromont.jpeg',
          '/photos/embracingWinter/bromont2.jpeg',
          '/photos/embracingWinter/bromont_nuit.jpeg',
        ],
      },
      {
        day: 22,
        month: 'Mar',
        activity: ['Skiing'],
        title: 'Cross Country Ski at Gai-Luron',
        description: 'Winter snowglobe wonderland with Trevor and Celeste!',
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
        description:
          '33k and sleeping in a lean-to with Am and Celeste. Spring camping yummieness.',
        photos: ['/photos/embracingWinter/gosford.jpeg', '/photos/embracingWinter/gosford2.jpeg'],
      },
      {
        day: 10,
        endDay: 11,
        month: 'Apr',
        activity: ['Camping'],
        title: 'Mont Tranchant Sleepover',
        description: 'Breakfast in St Come and sleeping in snow. Catching the end of winter. ',
        photos: [
          '/photos/embracingWinter/tranchant.jpeg',
          '/photos/embracingWinter/tranchant2.jpeg',
          '/photos/embracingWinter/tranchant3.jpeg',
        ],
      },
    ],
  },
];

const PhotoThumb = ({ src, count }: { src: string; count: number }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: { xs: '100%', sm: count > 2 ? `${100 / count}%` : '30%' },
        height: { xs: '100%', sm: '50%' },
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
      <Typography sx={{ fontSize: 20, fontWeight: 500, lineHeight: 1.5 }}>
        {endDay ? `${day}–${endDay}` : day}
      </Typography>
      <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: '2px' }}>
        {endMonth ? `${month}–${endMonth}` : month}
      </Typography>
    </Box>

    <Box sx={{ borderLeft: '1px solid', borderColor: 'divider', pl: 2 }}>
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
                fontSize: 14,
                fontWeight: 500,
                bgcolor: bg,
                color,
                '& .MuiChip-label': { px: 1 },
              }}
            />
          );
        })}
      </Box>
      <Typography sx={{ fontSize: 18, fontWeight: 500, mb: 0.5 }}>{title}</Typography>
      <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.6 }}>
        {description}
      </Typography>
      {photos && photos?.length > 0 && (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0.75} sx={{ width: '100%' }}>
          {photos.map((src, i) => (
            <PhotoThumb key={i} src={src} count={photos.length} />
          ))}
        </Stack>
      )}
    </Box>
  </Box>
);

const content = (
  <Box sx={{ mx: 'auto', py: 2 }}>
    <Typography>
      Finally learning how to lean into winter. A digital diary of my season of snow.
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: 1.25,
        mb: 3,
      }}
    >
      {[
        { label: 'Days outside', value: 26 },
        { label: 'Activities', value: 4 },
        { label: "Min 'Feels Like' Temp", value: '-38°C' },
      ].map(({ label, value }) => (
        <Box key={label} sx={{ bgcolor: 'action.hover', borderRadius: 2, p: 1.5 }}>
          <Typography
            sx={{ fontSize: 12, color: 'text.secondary', letterSpacing: '0.04em', mb: 0.75 }}
          >
            {label}
          </Typography>
          <Typography sx={{ fontSize: 26, fontWeight: 500, lineHeight: 1 }}>{value}</Typography>
        </Box>
      ))}
    </Box>
    {entries.map(({ month, items }) => (
      <Box key={month}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'black',
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
  title: '❄️ Embracing Winter in Québec',
  date: '2026-05-13',
  description: 'Finally learning how to lean into winter. A digital diary of my season of snow.',
  tags: ['outside'],
  content,
};
