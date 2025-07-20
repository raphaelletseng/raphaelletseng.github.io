import BlogCard from '../components/BlogCard';
import type { Blog } from '../types';
import blogIndex from '../blog/blogIndex';
import { Box, Typography, Divider } from '@mui/material';

const BlogHome = () => {
  const sorted = [...blogIndex].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const postsByYear = sorted.reduce(
    (groups, post) => {
      const year = new Date(post.date).getFullYear();
      (groups[year] ||= []).push(post);
      return groups;
    },
    {} as Record<number, Blog[]>,
  );

  const years = Object.keys(postsByYear).sort((a, b) => +b - +a);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="left" mb={2}>
        writings
      </Typography>

      {years.map((year) => (
        <Box key={year} sx={{ mb: 2 }}>
          <Divider textAlign="right" sx={{ align: 'right', marginLeft: 'auto' }}>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>
              {year}
            </Typography>
          </Divider>
          <Box sx={{ mt: 2 }}>
            {postsByYear[+year].map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BlogHome;
