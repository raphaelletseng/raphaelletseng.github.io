import { Box, Typography, Collapse, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Book {
  title: string;
  author: string;
  month: string;
  content: string;
}

const bookData: Book[] = [
  {
    title: 'We Will Be Jaguars',
    author: 'Nemonte Nenquimo & Mitch Anderson',
    month: 'May 2026',
    content:
      'First person account of the the recent struggles and successes of the Waorani People and their Amazonian neighbours in the face of Big Oil, disease, and missionary intervention',
  },
  {
    title: 'Taiwan Travelogue',
    author: 'Yang Shuang Zi, translated by Lin King',
    month: 'April 2026',
    content: `- Meta on translation — personally interesting given it covers a period of my own history I know little about
- Reading about colonisation without a western white perspective was refreshing, though not entirely novel given Japan's occupation of Southeast Asia
- The food descriptions alone are worth the read
- Quotes:
  - "There is nothing in the world more difficult to refuse than self-righteous goodwill."
  - "The scenery from the train window was like a liquid light, or like passing time."
  - "Listening to her gentle yet ringing voice in the dim lamplight felt like submerging in warm spring water."
- The footnotes on Chinese proverbs and classical poetry were a highlight:
  - Confucian disciple Zi Lu: "My wish is to share with friends my horse, cart, and clothes; were they to break and tear, I would have no regrets."
  - *Shijing* (oldest existing collection of Chinese poetry): "Gift me a sweet fruit and I shall give you jade — not merely to reciprocate, but to feel our shared affection."
  - *Spring Prospect* — Du Fu (Tang Dynasty, translated by Burton Watson): "The nation shattered, mountains and rivers remain / city in spring, grass and trees burgeoning / Feeling the times, blossoms draw tears / hating separation, birds alarm the heart / Beacon fires three months in succession / a letter from home worth ten thousand in gold / White hairs, fewer for the scratching / soon too few to hold a hairpin up."
  - *Lament that the Days Are So Short* — Li He (Tang Dynasty, translated by King): "Fleeting light, fleeting light, I beg you drink this cup of wine / I know not how high the blue skies, nor how rich the yellow earth / I see only the cold moon and hot sun wearing away our human years..." *(sent to Hamed, who replied with Omar Khayyam)*
  - Omar Khayyam, shared by Hamed: "That palace where Jamshid once held the cup — / A doe has given birth there, and a fox has made its rest / Bahram, who all his life hunted the onager — / Did you see how the grave has taken Bahram?"`,
  },
  {
    title: 'Madonna in a Fur Coat',
    author:
      'Sabahattin Ali with David Selim Sayers (Contributor), Alexander Dawe (translator), Maureen Freely (translator)',
    month: 'April 2026',
    content: `Heard about from Laurie because it was popular on tiktok, allegory for the fall of the Ottoman Empire and European Colonisation. The discussion of love and the cultural differences between perspectives were also interesting. Although I'm not sure I'd want to feel about anyone the way Raif feels about Maria - it feels borderline toxic. Raif was generally somewhat annoying to me by the end.`,
  },
  {
    title: 'Deborah: A Wilderness Narrative',
    author: 'David Roberts',
    month: 'April 2026',
    content: `Recommendation from Hamed who believes David Roberts is one of the few authors who writes about mountaineering well. Also read Roberts' piece on W.H. Auden.`,
  },
  {
    title: 'Sugarbread',
    author: 'Balli Kaur Jaswal',
    month: 'March 2026',
    content: `I think her more famous book is Erotic Stories for Punjabi Women. Found this on my shelf, likely left behind my mum on one of her trips here. Decided to read it to add Singapore to my list of countries read. A little bit brutal - Storygraph lists this as young adult, and I'm not sure I agree.`,
  },
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    month: 'March 2026',
    content: `Classic literature. Brutal ending. But also a lot of violence and misogyny that makes it at times a difficult too.`,
  },
  {
    title: 'Jacaranda',
    author: 'Gaël Faye',
    month: 'February 2026',
    content: `Written in a relatively accessible way - the main character feels relatable, and soft in a way that makes the trauma of the genocide even more stark. Read some of the trial scenes on the bus and that felt like the wrong place to be reading such content. But learnt a lot. A recommendation from maman, she left me her copy gifted to her by her cousin. Reading in French is slower but good practice.`,
  },
  {
    title: 'Death is Hard Work',
    author: 'Khaled Khalifa with Leri Price (translator)',
    month: 'February 2026',
    content: `Dark satire, the awful ridiculousness of some of the situations that arise from war. Also a book I think mum left on my shelf.
- "The horrific tension was almost killing him, he had no way of sleeping, his senses were inflamed. Even crying would be better than doing nothing; he wished he could manage it. Crying would relax him, wash him clean. And no one would ask a man transporting his father's corpse across the county why he was crying. Bolbol buried his head in the his blanket and heard a knocking sound in his head. He began to feel that he would surely die here; in fact he craved it."
- "After all, you have to do something if you aren't just going to lie down and die - if you don't want to sink down to the center of the earth."
- "Now all three siblings were like strangers to this corpse that, however much it had lost, still retained the advantage of being able to lie there without caring."`,
  },
  {
    title: 'The Birds',
    author: 'Tarjei Vesaas',
    month: 'February 2026',
    content: `Hamed gave me this one, after saying he wanted Marcus to read it, only to have Carly return it to him saying 'it's not worth Marcus reading it'. I actually really, really enjoyed the prose and the characters. The stillness of the world, and the deep empathy I felt with Mathis.
- "Sometimes Mathis thought it was more beautiful here than any other place he had seen... he was certainly lost in contemplation and let the twilight grow deeper and deeper, in so far as you could call it twilight and not just something unspeakably gentle."
- "She wasn't angry, she was moved. The shining bird had been reflected so beautifully in his face."`,
  },
  {
    title: 'Such a Fun Age',
    author: 'Kiley Reid',
    month: 'January 2026',
    content: `This was downloaded onto my kindle a while back when I bulk imported books. I'd heard good things about Kiley Reid's debut, and I thought this was an interesting exploration of perspective and race.`,
  },
  {
    title: 'Pleasure of Thinking',
    author: 'Wang Xiao Bo with Yan Yan (translator)',
    month: 'January 2026',
    content: `The first couple essays are really great, I think it lulls a little in the middle, and then picks back up again. Gifted to me by maman because she saw it and thought I might enjoy it. I need to read more Chinese literature, and left wing liberal literature at that too.
- "What speech is forever teaching us is that we are born unequal. That some should be high and some low is an eternal truth, though you may choose to disregard it."
- "ever since then, I have been unable to shake the feeling of being a piece of domestic ware or product. It is a tragic feeling. In this Eastern society I inhabit, there is nothing that can soothe my woe - this feeling of sadness does not derive from the literal facts of my existence, but from the unfortunate reality of domestic product - with which I feel affinity - itself. The thing that tells you you are a piece of domestic product is this: no matter what people decide to do with you, and no matter how they evaluate you, they don't need to offer an explanation of ask for your consent. "`,
  },
];

const CollapsibleSection = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        <Typography sx={{ fontWeight: 600 }}>{book.title}</Typography>
        <Typography>
          || {book.author} || {book.month}
        </Typography>
      </Box>
      <Collapse in={open}>
        <Box sx={{ paddingLeft: '20px' }}>
          <ReactMarkdown>{book.content}</ReactMarkdown>
        </Box>
      </Collapse>
    </Box>
  );
};

const content = (
  <Box>
    <Typography>
      {' '}
      I am attempting to read more authors from around the world. Here I touch on works from China,
      Syria, Norway, the United States, France, Rawanda, Nigeria, Singapore, Turkey, Taiwan, and
      Ecuador. These are work in progress notes and reminders for myself.
      <br />
    </Typography>
    <Divider sx={{ paddingTop: '10px', marginBottom: '10px' }} />
    {bookData.map((book) => (
      <CollapsibleSection key={book.title} book={book} />
    ))}
  </Box>
);

export default {
  slug: 'notes-on-books-2026-so-far',
  title: "📚 Some notes on books I've been reading this year",
  date: '2026-06-8',
  description: 'Notes on my reading from Jan-May 2026',
  tags: ['reading'],
  content,
};
