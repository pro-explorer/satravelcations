'use client';
import { BlogPostsPreview } from 'components/BlogPostPreview';
import { BlogPostsPagination } from 'components/BlogPostsPagination';
import Headline from 'components/ui/headline';
import { motion } from 'framer-motion';
import { wisp } from 'lib/wisp';
import BlogHero from './hero';

// Define the animation variants for the headline
const slideInFadeInVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and below the viewport
  visible: { opacity: 1, y: 0 },  // Fade-in and slide-up to normal position
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });

  return (
    <>
      <BlogHero />

      <div className="px-5 mt-4">
        <div id="blogs-headline">
          {/* Wrapping Headline with motion.div for animation */}
          <motion.div
            variants={slideInFadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }} // Trigger when 1% is in view
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 0.8,
            }}
          >
            <Headline
              title="Our Travel Blog"
              subtitle="Get inspired for your next adventure with tips, stories, and destination highlights."
              tagline="Travel Insights & Stories"
              classes={{
                container: "max-w-4xl mx-auto",
                title: "text-4xl font-bold text-gray-800 dark:text-white",
                subtitle: "mt-4 text-lg text-gray-600 dark:text-gray-400",
              }}
            />
          </motion.div>
        </div>

        <BlogPostsPreview posts={result.posts} />
        <BlogPostsPagination pagination={result.pagination} />
      </div>
    </>
  );
};

export default Page;