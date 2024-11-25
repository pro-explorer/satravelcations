import { BlogPostsPreview } from 'components/BlogPostPreview';
import { BlogPostsPagination } from 'components/BlogPostsPagination';
//import { Header } from "@/components/Header";
import Headline from 'components/ui/headline';
import { wisp } from 'lib/wisp';
import BlogHero from './hero';

const Page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>
      <BlogHero />

    
      <div className='px-5 mt-4'> 

         <div
        id="blogs-headline"
         className=''
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
      </div>

     

         <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      </div>
     
    </>
  );
};

export default Page;
