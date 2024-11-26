'use client';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { GetPostsResult } from 'lib/wisp';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

// Define animation variants for fade and slide-up effect
const slideInFadeInVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and below the viewport
  visible: { opacity: 1, y: 0 },  // Move to normal position with full opacity
};

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult['posts'][0];
}> = ({ post }) => {
  return (
    <motion.div
      variants={slideInFadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }} // Trigger when 1% of the element is in view
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        duration: 0.8,
      }}
      className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9]">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || '/images/placeholder.webp'}
            fill
          />
        </div>
      </Link>
      <div className="p-6">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
            {post.title}
          </Link>
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
          {format(new Date(post.publishedAt || post.updatedAt), 'dd MMMM yyyy')}
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.name}`}
              className="text-sm bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full hover:bg-primary-200 dark:hover:bg-primary-700 transition"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult['posts'];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-3 md:my-16 my-8', className)}>
      {posts.map((post) => (
        <div key={post.id}>
          <BlogPostPreview post={post} />
        </div>
      ))}
    </div>
  );
};
