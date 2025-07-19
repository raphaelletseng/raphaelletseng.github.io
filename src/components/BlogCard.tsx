import { Card, Typography, CardActionArea, CardContent } from '@mui/material';
import type { Blog } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: Blog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card sx={{ minWidth: 400, padding: 2, margin: 2 }}>
      <CardActionArea component={Link} to={`/blog/${post.slug}`}>
        <CardContent>
          <Typography sx={{ fontWeight: 400, fontSize: '1.2rem', textAlign: 'left' }}>
            {post.title}
          </Typography>
          <Typography sx={{ fontSize: '1rem', textAlign: 'left' }}>{post.description}</Typography>
          <Typography sx={{ fontSize: '1rem', textAlign: 'left' }}>{post.date}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
