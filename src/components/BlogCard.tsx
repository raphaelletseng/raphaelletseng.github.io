import { Card } from '@mui/material';
import type { Blog } from '../pages/types';

interface BlogCardProps {
  post: Blog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return <Card>{post.title}</Card>;
};

export default BlogCard;
