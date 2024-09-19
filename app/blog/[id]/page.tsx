// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import { blogPosts } from "@/data/blogs";

interface BlogPostPageProps {
  params: { id: string };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return <Blog post={post} />;
};

export default BlogPostPage;
