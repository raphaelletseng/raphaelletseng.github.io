import BlogCard from '../components/BlogCard';
import type { Blog } from '../types';
import blogIndex from '../blog/blogIndex';
import { Box, Typography, Divider } from '@mui/material';
import { motion, useReducedMotion } from 'motion/react';

const MotionTypography = motion(Typography);

const BlogHome = () => {
  const shouldReduceMotion = useReducedMotion();
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
    <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 2, sm: 3 } }}>
      <MotionTypography
        variant="h4"
        textAlign="left"
        mb={2}
        initial={shouldReduceMotion ? false : { opacity: 0, x: -60 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        writings
      </MotionTypography>

      {years.map((year) => (
        <Box key={year} sx={{ mb: 2 }}>
          <Divider
            textAlign="right"
            sx={{
              my: 2,
              borderColor: 'divider',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
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
