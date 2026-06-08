import { Box, List, ListItem, Typography } from '@mui/material';
import maygif from '../../assets/images/maygif.gif';
import habs from '../../assets/images/mayrecap/habs.jpeg';
import lp from '../../assets/images/mayrecap/legendepersonelle.jpeg';
import parks from '../../assets/images/mayrecap/parks.jpeg';
import winston from '../../assets/images/mayrecap/winston.jpeg';
import fatigue from '../../assets/images/mayrecap/fatigue.jpeg';

const content = (
  <Box sx={{ padding: 2 }}>
    <Box
      component="img"
      src={maygif}
      alt="6 Things From May"
      sx={{
        float: 'left',
        width: { xs: '100%', md: '480px' },
        height: 'auto',
        marginRight: 3,
        marginBottom: 2,
        borderRadius: 1,
      }}
    />
    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>1. A new bike: Masi CX Comp 2016</Typography>
      <Typography>
        I purchased a bright, orange MASI 2016 Comp CX bike third hand, off of a friend of a friend,
        in Les Faubourgs. The stormy sky had just cleared into a purple sunset as I test rode it up
        and down the bike path. It’s practically egregious how much fun riding a bike can be. I’ve
        gotten to ride it to work during the week, I’ve taken it to dim sum, far outside my usual
        radius, and explored new parks with it, even cycling up Mont Royal for the first time since
        living here. I am imagining bike packing adventures that have suddenly become more
        accessible to me and I am excited for how many more new destinations I can unlock with it.
      </Typography>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>
        2. The Montreal Habs in the Stanley Cup Playoffs
      </Typography>
      <Box
        component="img"
        src={habs}
        alt="Habs fans"
        sx={{
          float: 'left',
          width: { xs: '50%', md: '150px' },
          height: 'auto',
          borderRadius: '5px',
          margin: '7px',
        }}
      />
      <Typography>
        I do not watch a lot of sports and I do not support a sports team. However, I think it’s
        impossible to live in Montreal during Hockey playoff season and feel indifferent towards the
        Montreal Canadiens if they make it through. This month, the city felt electric with hope,
        and the communal affair of getting emotionally invested in the Habs’ performance was
        inescapable and joyful. I’d see jerseys everywhere around town, I’d know the score from the
        cheers I’d hear through the open window, and I’d watch people crowding outside a bar to
        watch the game on a tiny TV. And I appreciated how sports can bring people together for a
        small while.
      </Typography>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>3. Climbing and camping at Lac Long </Typography>
      <Typography>
        This spring also meant our annual Lac Long climbing trip, where I forgot poles and pegs for
        our tent, leading to a strung up solution with ropes and hiking poles, worthy of any modern
        art museum. We made kielbasa and potatoes in the fire, bathed in the cold river water, and
        slept under stars lulled by the rushing of the falls. I had a minor meltdown on my first
        trad lead of the season (to be expected) but also shared a glorious day on Gros Bonnet with
        Nick, following him up perfect hand jams on Legende Personelle. Spending time in nature is
        good for my brain.
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '7px',
        marginBottom: '10px',
      }}
    >
      {[
        { src: lp, alt: 'Pitch 2 Legende Personelle' },
        { src: winston, alt: 'Winston' },
        { src: parks, alt: 'Parc Laurier' },
        { src: fatigue, alt: 'Dried flowers' },
      ].map(({ src, alt }) => (
        <Box
          key={alt}
          sx={{
            width: { xs: 'calc(50% - 4px)', md: '200px' },
            borderRadius: '5px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>
      ))}
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>4. Thankful for park hangs </Typography>
      <Typography>
        May also marked the beginning of park hang season. I love lying in the grass with sunshine
        on my face. I spent many a day lounging on a picnic blanket, reading, snacking, chatting,
        snoozing, journalling, stretching, pondering. I am ever grateful for open spaces to convene
        in with friends and public spots to sit and rest. Also, for the dog parks, the chirping
        birds, the sports facilities, the bright spring green, and getting to witness everyone else
        in the neighbourhood enjoying the parks as much as me.
      </Typography>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>5. Media I consumed in May:</Typography>
      <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <ListItem sx={{ display: 'list-item' }}>
          I read Nemonte Nenquimo and Mitch Anderson’s <em>We Will Be Jaguars</em>. A recommendation
          from Kisa that taught me more about the recent struggles and successes of the Waorani
          People and their Amazonian neighbours in the face of Big Oil, disease, and missionary
          intervention.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          I watched <em>Maiden Trip</em>, about 14 year old Laura Dekker solo-circumnavigating the
          globe, and Spielberg’s <em>The Adventures of Tintin</em> with Nicholas. I rewatched{' '}
          <em>the Devil Wears Prada</em>. This inspired a trip to the cinema with Laurie, Celeste,
          and El, to watch <em>the Devil Wears Prada 2</em> where I lamented poor writing in
          blockbuster films and continued to question the use of AI in art.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          The climbing world cup circuit was in full swing and I made sure to follow along.{' '}
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          I listened to many <em>Guardian Today in Focus</em> episodes and supplemented them with
          occasional <em>BBC Global News Podcast</em> and <em>NYT Daily</em> pieces. Angela Harnett
          and Nick Grimshaw made me laugh with their <em>Waitrose Dish</em> segments.
        </ListItem>
      </List>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>
        7. On fatigue and good naps and injury and burnout
      </Typography>
      <Typography>
        {' '}
        This month has also been tricky as I continue to deal with sesamoiditis, which has stopped
        me from running and severely limited my climbing (hence biking!). I have felt exhausted in a
        way that feels at odds with spring - a time of rebirth and energisation. On the bright side,
        I have taken some stellar naps as I attempt to be patient with myself and rest as needed.
        Picture an open window with a perfectly cool breeze gentling your skin, sleep like a wave
        lapping softly at the edges of your mind, and a cat curled at the foot of your bed breathing
        in tandem with your rising chest.{' '}
      </Typography>
    </Box>
  </Box>
);
export default {
  slug: '6-things-from-may',
  title: '🌿 6 Things From May',
  date: '2026-06-07',
  description: 'Things I loved, did, felt, experienced in the month of May.',
  tags: ['life'],
  content,
};
