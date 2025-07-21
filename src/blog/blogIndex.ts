import type { Blog } from '../types';
import sentimentAnalysis from './posts/sentiment-analysis';
import biasMitigationMl from './posts/bias-mitigation-ml';
import y2FallSem from './posts/y2-fall-sem';
import climateTechStartHere from './posts/climate-tech-start-here';
import makingAPopUpPoster from './posts/makingAPopUpPoster/making-a-pop-up-poster';
import scrapingNewsHeadlines from './posts/scraping-news-headlines';

const blogPosts: Blog[] = [
  sentimentAnalysis,
  biasMitigationMl,
  y2FallSem,
  climateTechStartHere,
  makingAPopUpPoster,
  scrapingNewsHeadlines,
];

export default blogPosts;
