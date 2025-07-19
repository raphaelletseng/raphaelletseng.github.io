import BlogCard from '../components/BlogCard';
import type { Blog } from '../types';
import blogIndex from '../blog/blogIndex';

import { Box, Typography, Divider } from '@mui/material';

const BlogHome = () => {
  const sortedBlogPosts = [...blogIndex].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <Box sx={{ padding: 4, display: 'block' }}>
      <Typography variant="h4" sx={{ textAlign: 'left', margin: 2 }}>
        writings
      </Typography>
      <Divider orientation="horizontal" sx={{ marginBottom: 2 }} flexItem />
      {sortedBlogPosts.map((post: Blog) => (
        <BlogCard key={post.slug} post={post} />
      ))}
      ;
    </Box>
  );
};
export default BlogHome;
