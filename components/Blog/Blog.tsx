// components/Blog.tsx
import React from 'react';
import { BlogPost, ContentBlock } from '@/data/blogs';
import Image from 'next/image';
import image from '@/public/images/1696065152678.png';

interface BlogProps {
  post: BlogPost;
}

const Blog: React.FC<BlogProps> = ({ post }) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'title':
        return (
          <h2 key={index} className="text-3xl font-bold mb-4">
            {block.content}
          </h2>
        );
      case 'text':
        return (
          <p key={index} className="text-lg mb-4">
            {block.content}
          </p>
        );
      case 'image':
        return (
          <Image
            key={index}
            width={500}
            height={300}
            src={image}
            alt={block.content.alt}
            className="my-4 rounded-lg shadow-md w-full h-auto"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* <h1 className="text-4xl font-extrabold mb-6">{post.title}</h1> */}
      {post.blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default Blog;
