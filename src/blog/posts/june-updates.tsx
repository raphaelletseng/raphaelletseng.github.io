import { Box, List, ListItem, Typography, Link } from '@mui/material';
import june from '../../assets/images/june.jpg';
import june_food from '../../assets/images/june_food.png';
import june_dehors from '../../assets/images/june_dehors.png';
import june_skies from '../../assets/images/june_skies.png';

const content = (
  <Box sx={{ padding: 2 }}>
    <Box
      component="img"
      src={june}
      alt="June Postcard"
      sx={{
        width: '100%',
        height: 'auto',
        marginBottom: 2,
        borderRadius: 1,
      }}
    />
    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>1. June has been a swim: rain, water, sweat.</Typography>
      <Typography>
        This month I’ve been drenched to the bone, getting caught in torrential thunderstorms,
        sweating through a hot yoga trial, and waking up early to go to the public pool before work.
        I have a swimsuit tan that reminds me of a childhood in the tropics. There’s something
        intimately familiar about a warm downpour and dipping your head in cold water on a sunny
        day. Swimming has been a welcome way to move my body as my foot continues to be
        non-cooperative. On St Jean Baptiste, we explored Cap St Jacques and spent a day lounging on
        hot sand and swimming in the river. We built a sandcastle and ate sandwiches on the picnic
        tables, a caricature of a summer’s day.
      </Typography>
    </Box>
    <Box
      component="img"
      src={june_dehors}
      alt="June Outside"
      sx={{
        float: 'right',
        width: { xs: '100%', md: '30%' },
        height: 'auto',
        marginLeft: 3,
        marginBottom: 2,
        borderRadius: 1,
      }}
    />

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>2. One Big Bike Ride.</Typography>
      <Typography>
        I rode the furthest I’ve ever gone on my bicycle. 115km on a blue sky Saturday, climbing
        over the mountain, meandering along the canal, and pedalling to Sainte-Anne-de-Bellevue on
        the edge of the island for brunch with friends. Then cutting across to Île Bizard,
        discovering new trails and tracks, changing two flats on Laurie’s new bike, feeling grateful
        for padded shorts, and gulping down gatorade at a gas station sprawled across the parking
        floor. Even coasting down the southern shore of Laval before heading home held newfound joy.
        It felt good to try something that felt hard and venture somewhat into unknown territory.
      </Typography>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>3. Summer is for eating.</Typography>
      <Typography>
        June has been filled with good food. Picnics in the park, zongzi and a surprise T&T Night
        market around Dragon Boat Festival, fresh sugar cane juice, and hot pockets of chewy dough
        filled with meat. Colourful produce and delicious cheese at Jean Talon market, big heirloom
        tomatoes with sherry vinegar sliced over toast with white anchovies. Feta and walnuts and
        fresh herbs, making ricotta in a sweltering heat wave with Amandine, rhubarb and strawberry
        jam and syrup. Many jaunts to Kem Coba ice cream to try their new soft serve twists and
        flavours, and grabbing a hot slice from Pizza Bouquet en route to an evening plan. The{' '}
        <Link href="https://www.instagram.com/flyingtablesmtl/">Flying Tables</Link> Viet Sichuan
        Pop Up at Wills. Crepes and coffee for breakfast and pancakes and generally indulging in
        eating things that make my heart and tummy happy.
      </Typography>
    </Box>
    <Box
      component="img"
      src={june_food}
      alt="June Food"
      sx={{
        width: '100%',
        height: 'auto',
        marginBottom: 2,
        borderRadius: 1,
      }}
    />

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>4. Media for June:</Typography>
      <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography>
            I read the Vegetarian by Han Kang - full of rage and quietly unexpected. I picked a
            beach read in Malibu Rising by Taylor Jenkins Reid for our day lounging on the Cap sand.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography>
            I watched Madagascar and Mile End Kicks and enjoyed seeing my neighbourhood and
            favourite jaunts on the big screen, although I found almost every character infuriating.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography>
            I danced to <Link href="https://www.fourtet.net/">Four Tet</Link> at{' '}
            <Link href="https://piknicelectronik.com/en">Piknic Electronik</Link>
            under a perfect evening golden sun - an amazing set that wrapped everyone up in a 2 hour
            trance, finishing with some real gems. I danced to Izzy Escobar, D.K Harrell and Kamasi
            Washington at the <Link href="https://montrealjazzfest.com/en">Jazz Festival</Link>,
            revelling in the free music we are lucky enough to have access to in this city.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography>
            I read a lot of <Link href="https://cyoo.substack.com/">Carolyn Yoo’s Substack</Link> on
            recommendation from Sharon.
          </Typography>
        </ListItem>
      </List>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>5. Year of Mum and Visits From Friends</Typography>
      <Typography>
        There’s something unexpectedly sweet about getting to meet your friends’ parents as an
        adult. This year, mums have been mobilising to come to Montreal. It’s fun to learn more
        about what people were like as children from those who raised them, to pick out the quirks
        and similarities they got from their families. More often than not, even though I’m meeting
        mums for the first time, I feel like I already know them because I adore their children.{' '}
        <br />
        Also, we’ve been lucky to have visits from old friends this month. Jeremy, Kelly, Coco, and
        Grace, all passing through. Grateful to be able to catch up with people scattered across
        different coasts.
      </Typography>
    </Box>

    <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography sx={{ fontWeight: 600 }}>6. Meditating for my Brain</Typography>
      <Typography>
        A last note on work I am doing for my brain - I acquired a free headspace trial for 60 days
        where I am keeping up a daily streak. Meditation comes recommended from both my therapist
        and my father, so I figured I ought to give it a better shot. And I am enjoying it for now.
        I don’t know if my brain is becoming less chaotic as a whole (I still have many many
        thoughts) but for 10 minutes a day, it is feeling more quiet.
      </Typography>
    </Box>
    <Box
      component="img"
      src={june_skies}
      alt="June Skies"
      sx={{
        width: '100%',
        height: 'auto',
        marginBottom: 2,
        borderRadius: 1,
      }}
    />
  </Box>
);

export default {
  slug: 'june-updates',
  title: '🌊 June Snippets',
  date: '2026-07-14',
  description: 'Water, Food, Friends - the essentials.',
  tags: ['life'],
  content,
};
