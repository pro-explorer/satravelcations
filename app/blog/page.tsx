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

    
      <div className='px-5'> 

         <div
        id="blogs-headline"
      >
       <Headline
          title="Our Travel Blog"
          subtitle="Get inspired for your next adventure with tips, stories, and destination highlights."
          tagline="Travel Insights & Stories"
          classes={{
            container: "max-w-4xl mx-auto ",
            title: "text-5xl ",
            subtitle: "text-2xl ",
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
