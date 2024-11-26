'use client';

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { GetRelatedPostsResult } from "@wisp-cms/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

// Define the animation variants for the posts
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Hidden state (slide from below)
  visible: { opacity: 1, y: 0 },  // Visible state (normal position)
};

export const RelatedPosts: FunctionComponent<{
  posts: GetRelatedPostsResult["posts"];
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="my-8 max-w-prose text-xl mx-auto">
      <div className="mb-6 text-lg font-semibold tracking-tight">
        Related Posts
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/blog/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={post.image || "/images/placeholder.png"}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
              </AspectRatio>
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                {post.description}
              </p>
              <Link href={`/blog/${post.slug}`} className="text-primary-600 dark:text-primary-300 hover:underline">
                <strong>Read Full Story</strong>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
