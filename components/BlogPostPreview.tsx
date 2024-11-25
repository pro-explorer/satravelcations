"use client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import { GetPostsResult } from "lib/wisp";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <motion.div
      className="break-words"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={animationVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
          {format(new Date(post.publishedAt || post.updatedAt), "dd MMMM yyyy")}
        </div>
        <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          {post.description}
        </div>
        <div className="text-sm text-muted-foreground">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-3 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogPostPreview post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};
