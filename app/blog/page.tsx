// pages/blog/index.tsx
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

const BlogListPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.id}`}>
              <div className="text-2xl text-blue-600 hover:underline">
                {post.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogListPage;
