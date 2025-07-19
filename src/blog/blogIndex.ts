import type { Blog } from '../types';
import sentimentAnalysis from './posts/sentiment-analysis';
import biasMitigationMl from './posts/bias-mitigation-ml';

const blogPosts: Blog[] = [sentimentAnalysis, biasMitigationMl];

export default blogPosts;
