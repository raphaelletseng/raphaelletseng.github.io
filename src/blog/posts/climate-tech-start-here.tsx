import { Typography, Link } from '@mui/material';

const content = (
  <Typography variant="body1">
    As I am coming to the end of my bachelor’s in mathematics and computer science, I have begun
    looking for opportunities where I can best apply the skills I have learnt to address today’s
    pressing environmental and social challenges.
    <br />
    Whilst a lot of awe-inspiring, cutting-edge, all-around-cool work is being done in this space,
    it can sometimes be hard to navigate. I’ve been fortunate enough to speak to lots of lovely,
    kind, generous people in the climate tech community who have shared resources and tips. They are
    compiled here for anyone else who might be looking to begin a career in climate work and find
    climate related tech roles.
    <br />
    <br />
    <Typography component="ul">
      <Typography component="li">
        <Link href="https://climatebase.org" target="_blank" rel="noopener">
          Climate Base
        </Link>
        : A platform with a directory of climate jobs, events, and organisations.
      </Typography>
      <Typography component="li">
        <Link href="https://workonclimate.org" target="_blank" rel="noopener">
          Work on Climate
        </Link>
        : A Slack community for people serious about climate work—find jobs, build companies, and
        meet likeminded folks.
      </Typography>
      <Typography component="li">
        <Link href="https://techjobsforgood.com" target="_blank" rel="noopener">
          Tech Jobs For Good
        </Link>
        : A job board for tech roles in social and environmental impact.
      </Typography>
      <Typography component="li">
        <Link href="https://www.climatechange.ai" target="_blank" rel="noopener">
          Climate Change AI
        </Link>
        : Opportunities at the intersection of climate change and machine learning.
      </Typography>
      <Typography component="li">
        <Link href="https://innovateclimate.com" target="_blank" rel="noopener">
          Innovate Climate
        </Link>
        : A newsletter highlighting climate startups; apply to be featured.
      </Typography>
      <Typography component="li">
        <Link href="https://urban.us/jobs" target="_blank" rel="noopener">
          Urban Us Job Board
        </Link>
        : Listings for startups funded by Urban Us working on climate‑resilient cities.
      </Typography>
      <Typography component="li">
        <Link href="#" target="_blank" rel="noopener">
          Conservation Tech Resources
        </Link>
        : A spreadsheet of conservation‑tech organizations and tools.
      </Typography>
      <Typography component="li">
        <Link href="https://climateaction.tech" target="_blank" rel="noopener">
          Climate Action .tech
        </Link>
        : A community of tech workers advocating systemic climate change.
      </Typography>
      <Typography component="li">
        <Link href="#" target="_blank" rel="noopener">
          Climate Tech Guide for Designers
        </Link>
        : A guide and company list for designers in climate tech.
      </Typography>
      <Typography component="li">
        <Link href="https://earthhero.com" target="_blank" rel="noopener">
          Earth Hero
        </Link>
        : An app suggesting personalized, positive steps for climate and community care.
      </Typography>
      <Typography component="li">
        <Link href="https://terra.do" target="_blank" rel="noopener">
          Terra.do
        </Link>
        : A 12‑week online course by world‑class climate practitioners.
      </Typography>
    </Typography>
    <br />
    <br />
    Let me know if I’m missing anything that ought to be added to this list!
  </Typography>
);

export default {
  slug: 'climate-tech-starter-pack',
  title: '🌏 Climate Tech Starter Pack ',
  date: '2021-07-21',
  description: 'A compilation of resources to begin navigating a career in climate! ',
  tags: ['resources', 'climate-tech', 'careers'],
  content,
};
