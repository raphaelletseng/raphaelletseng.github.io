import { useParams } from 'react-router-dom';
import blogPosts from '../blog/blogIndex';
import type { Blog } from '../types';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;
  console.log(post);
  return (
    <>
      <p>{post.title}</p>
      <p> {post.date}</p>
      <div>{post.content}</div>
    </>
  );
};

export default BlogPage;
