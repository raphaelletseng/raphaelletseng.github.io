import type { Blog } from '../types';
import sentimentAnalysis from './posts/sentiment-analysis';
import biasMitigationMl from './posts/bias-mitigation-ml';
import y2FallSem from './posts/y2-fall-sem';

const blogPosts: Blog[] = [sentimentAnalysis, biasMitigationMl, y2FallSem];

export default blogPosts;
