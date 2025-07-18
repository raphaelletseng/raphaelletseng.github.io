import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <>
      <h1>Hello</h1>
      <BlogCard
        post={{
          title: 'hello world',
          date: '2023-10-01',
          description: 'This is a test blog post.',
        }}
      />
    </>
  );
};
export default Blog;
