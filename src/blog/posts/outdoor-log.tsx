import { Box, Typography, Divider } from '@mui/material';

const changelog = [
  {
    month: 'October 2026',
    entries: [
      ['9-11', 'Mont Tremblant Camping and Hikes'],
      ['3', 'Knowlton Mt Echo Hike'],
    ],
  },
  {
    month: 'September 2026',
    entries: [
      ['18-20', 'Bellie Wedding Camping and Triathlon'],
      ['11-13', 'Charlevoix & Les Hautes Gorges Camping and Hiking'],
      ['27', 'Climbing at Tranchant'],
    ],
  },
  {
    month: 'August 2026',
    entries: [
      ['29', 'Val David Climbing'],
      ['22', 'Day of Sailing'],
      ['9', 'Val David Run and Swim'],
      ['1-2', 'Gals Bikepacking in the Laurentides'],
    ],
  },
  {
    month: 'July 2026',
    entries: [
      ['26-28', 'Juan De Fuca Backpacking Trip (50k)'],
      ['18-20', 'Charlevoix and Tadoussac Camping'],
      ['12', 'First Time up CH - 42k Bike Ride'],
    ],
  },
  {
    month: 'June 2026',
    entries: [['13', 'Longest bike ride yet - 115k to St Anne and Ile Bizard']],
  },
  {
    month: 'May 2026',
    entries: [
      ['15-18', 'Camping at Lac Long - Legende Personelle'],
      ['23', 'Climbing at Val David'],
    ],
  },
  {
    month: 'April 2026',
    entries: [
      ['21-22', 'Bouldering in Fontainebleau'],
      ['10-11', 'Mont Tranchant Sleepover'],
      ['3-4', 'Gals in Gosford Lean-to hike (33k)'],
    ],
  },
  {
    month: 'March 2026',
    entries: [
      ['22', 'Gai Luron Cross Country Ski)'],
      ['15', 'Bromont Night Ski - First Black Diamond'],
    ],
  },
  {
    month: 'February 2026',
    entries: [
      ['28', 'Opale with Nick - 2nd Ice Multi'],
      ['14', 'Val David Microspike hike with Maman'],
      ['9', 'Learning to ski at Bruno'],
      ['1', 'Mont Barriere - 1st Ice Multi w Hamed'],
    ],
  },
  {
    month: 'January 2026',
    entries: [
      ['24-25', 'Cap 360 Winter Camping in -30'],
      ['17', '1st Time Cross Country Skiing on Mt Royal'],
      ['10-11', 'Malbaie Triolet Attempt'],
      ['4', 'Cold day at Shawbridge'],
    ],
  },
  {
    month: 'December 2025',
    entries: [
      ['31-1', 'Mauricie Winter Camping NYE Hotpot'],
      ['24-28', 'St Alexis and Mastigouche Climbing'],
      ['13', "Am's Birthday at Lac Sylvere"],
      ['6-7', 'Crawford Notch and Huntington Ravine'],
    ],
  },
  {
    month: 'November 2025',
    entries: [['1', "First Time Dry Tooling at Montagne D'Argent"]],
  },
  {
    month: 'October 2025',
    entries: [
      ['25', 'First fall on gear on Sceptre! '],
      ['18', 'Led Adagio 5.8+ '],
      ['10-11', 'Pemiwegasset Loop'],
      ['4', 'Aided Sacrifice Saignant at St Alphonse'],
    ],
  },
  {
    month: 'September 2025',
    entries: [
      ['28', 'Lac Blanc '],
      ['14', 'Black & White at Weir w Nick'],
      ['21', 'Montreal Half-Marathon'],
      ['7', 'Ultranza 30k at Val David'],
    ],
  },
  {
    month: 'August 2025',
    entries: [
      ['29-1', 'Charlevoix Blueberry Traverse'],
      ['16', '21k+ in Chamonix'],
      ['15', 'Climbing in Valorcine'],
      ['14', 'Lac Blanc Hike'],
      ['7-10', 'First 50k+ week in France'],
    ],
  },
  {
    month: 'July 2025',
    entries: [
      ['19', 'Mont King - First Trad Multi Lead'],
      ['12', 'Sweaty in Baldy'],
      ['4-5', 'First Time Backpacking in Gaspesie - Summitted Jacques Cartier'],
      ['28-6', 'Gaspesie Hiking Camping Trip'],
      ['29', 'Climbing at 4eme Plage in Rimouski'],
    ],
  },
  {
    month: 'June 2025',
    entries: [
      ['29', 'Climbing at 4eme Plage in Rimouski'],
      ['8', 'Climbing at Tranchant with Hao'],
    ],
  },
  {
    month: 'May 2025',
    entries: [
      ['25', 'St Alph climbing'],
      ['4', 'Weir with Friends'],
    ],
  },
  {
    month: 'October 2024',
    entries: [
      ['26', 'Tried a 12a outside (Apesenteur at St Alph)'],
      ['11-13', 'Rumney Climbing Trip - Tried an 11d twice.'],
    ],
  },
  {
    month: 'September 2024',
    entries: [
      ['28-30', 'Kamouraska - One hanged Moby Dick 11b'],
      ['14', 'First trad lead - 5.7 at St Alph'],
    ],
  },
  {
    month: 'August 2024',
    entries: [['24', 'Sent Phenix at St Alph']],
  },
  {
    month: 'June 2024',
    entries: [['26', 'Climbed at Batu Caves for the first time']],
  },
  {
    month: 'May 2024',
    entries: [
      [
        '18-20',
        'Lac Long - Onsighted La Toute Beauté and summitted Gros Bonnet for the first time',
      ],
      ['12', 'Onsighted Doux Novembre 11a at St Alph'],
    ],
  },
  {
    month: 'April 2024',
    entries: [
      ['27', 'Trying Que Ton Reigne Vienne at Weir'],
      ['20', 'Ran 26k for the first time'],
    ],
  },
  {
    month: 'March 2024',
    entries: [['16', 'Ran a half marathon for the first time since 2019']],
  },
  {
    month: 'January 2024',
    entries: [['-', 'Ran over 100km this month']],
  },
  {
    month: 'October 2023',
    entries: [['20', 'Biking to St Anne and Chambly on Allys bike']],
  },
  {
    month: 'August 2023',
    entries: [
      ['27', 'Sent Calypso 10c at St Alph'],
      [
        '10-18',
        'Squamish! Learnt to multipitch, touched the Chief, learnt to crack climb - Centurion with Ben. Longest Camping trip yet.',
      ],
    ],
  },
  {
    month: 'October 2022',
    entries: [
      ['8', 'Climbed a V4 boulder at Val David'],
      ['1', 'Birthday climbs at Montage dArgent'],
    ],
  },
  {
    month: 'September 2022',
    entries: [['24', 'Day at Val David']],
  },
  {
    month: 'July 2022',
    entries: [
      ['17', 'Day at Val David w lake swim'],
      ['10', 'Mont Rigaud Climbing'],
    ],
  },
  {
    month: 'September 2021',
    entries: [['17', 'First Time Climbing Outside in Canada at Tranchant']],
  },
];

const content = (
  <Box>
    {changelog.map(({ month, entries }) => (
      <Box key={month} sx={{ mb: 3 }}>
        <Typography variant="h6">{month}:</Typography>
        <Divider sx={{ my: 1 }} />
        <Box component="ul" sx={{ m: 0, pl: 3 }}>
          {entries.map(([date, descriptor]) => (
            <li key={`${month}-${date}`}>
              <Typography component="span">
                {date}: {descriptor}
              </Typography>
            </li>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

export default {
  slug: 'outdoor-log',
  title: 'Log of Days Out',
  date: '2026-10-14',
  description: 'yay to being outside',
  tags: ['outside'],
  content,
};
