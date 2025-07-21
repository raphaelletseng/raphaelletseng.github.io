import { useParams } from 'react-router-dom';
import blogPosts from '../blog/blogIndex';
import { Box, Divider, Container } from '@mui/material';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 3, sm: 4 } }}>
      <Box
        sx={{
          padding: { xs: 0, sm: 2 },
          textAlign: 'left',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          maxWidth: '100%',
        }}
      >
        <h2>{post.title}</h2>
        <p> {post.date}</p>
        <Divider orientation="horizontal" sx={{ marginBottom: 2 }} flexItem />
        <Box
          sx={{
            '& *': {
              maxWidth: '100%',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            },
            '& img': {
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            },
            '& table': {
              width: '100%',
              overflowX: 'auto',
              display: 'block',
            },
          }}
        >
          {post.content}
          <Divider orientation="horizontal" sx={{ marginTop: 4 }} flexItem />
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;
