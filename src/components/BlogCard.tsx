import { Card, Chip, Typography, Stack, CardActionArea, CardContent } from '@mui/material';
import type { Blog } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: Blog;
}

const TAG_COLORS = [
  { bg: '#E9F1FE', text: '#3B71CA' }, // blue
  { bg: '#E9F8EF', text: '#2E9457' }, // green
  { bg: '#E1F5EE', text: '#085041' }, // teal
  { bg: '#FBEAF0', text: '#993556' }, // pink
  { bg: '#FAEEDA', text: '#854F0B' }, // amber
  { bg: '#FDF0E4', text: '#C2661A' }, // orange
  { bg: '#FAECE7', text: '#993C1D' }, // coral
  { bg: '#F3EEFE', text: '#8347D9' }, // purple
];

const tagColorRegistry = new Map<string, (typeof TAG_COLORS)[number]>();
let nextColorIndex = 0;

const getTagColor = (tag: string) => {
  if (!tagColorRegistry.has(tag)) {
    tagColorRegistry.set(tag, TAG_COLORS[nextColorIndex % TAG_COLORS.length]);
    nextColorIndex++;
  }
  return tagColorRegistry.get(tag)!;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card sx={{ margin: 1, boxShadow: 'none' }}>
      <CardActionArea component={Link} to={`/blog/${post.slug}`}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '1.2rem', textAlign: 'left' }}>
            {post.title}
          </Typography>
          <Typography sx={{ fontSize: '1rem', textAlign: 'left' }}>{post.description}</Typography>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ flexWrap: 'wrap', rowGap: '6px' }}
          >
            <Typography sx={{ fontSize: '1rem', textAlign: 'left' }}>{post.date}</Typography>

            {post.tags && post.tags.length > 0 && (
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: '6px' }}>
                {post.tags.map((tag) => {
                  const { bg, text } = getTagColor(tag);
                  return (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontSize: '0.75rem',
                        backgroundColor: bg,
                        color: text,
                        fontWeight: 500,
                      }}
                    />
                  );
                })}
              </Stack>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
