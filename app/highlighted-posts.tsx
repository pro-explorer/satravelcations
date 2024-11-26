"use client";

import Headline from "components/ui/headline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Mock Data
const blogs = Array.from({ length: 16 }, (_, i) => ({
  id: `blog-${i}`,
  createdAt: new Date(),
  teamId: `team-${i}`,
  description: `Discover tips and insights for your next adventure! Blog post #${i + 1}.`,
  title: `Blog Title ${i + 1}`,
  slug: `blog-title-${i + 1}`,
  image: `/images/about-hero.jpg`,
  authorId: `author-${i}`,
  updatedAt: new Date(),
  publishedAt: new Date(),
  distance: Math.random() * 10,
}));

export function BlogHighlightedPosts() {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Headline with Framer Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Headline
            title="Our Latest Adventures"
            subtitle="Explore the latest blogs and insights for your next luxurious getaway."
            classes={{
              container: "max-w-4xl mx-auto",
              title: "text-3xl font-semibold text-gray-800 dark:text-white",
              subtitle: "mt-4 text-sm text-gray-600 dark:text-gray-400",
            }}
          />
        </motion.div>

        {/* Grid of Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Blog Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={blog.image || "/images/default-placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Blog Content */}
              <div className="flex-1 p-4 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow line-clamp-3">
                  {blog.description}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-2">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block mt-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-all duration-300"
          >
            View All Blogs
            <FaArrowRight className="inline-block ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
