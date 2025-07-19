import { useParams } from 'react-router-dom';
import blogPosts from '../blog/blogIndex';
import { Box, Divider } from '@mui/material';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: 'left',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        maxWidth: '100%',
      }}
    >
      <h2>{post.title}</h2>
      <p> {post.date}</p>
      <Divider orientation="horizontal" sx={{ marginBottom: 2 }} flexItem />
      <div>{post.content}</div>
    </Box>
  );
};

export default BlogPage;
