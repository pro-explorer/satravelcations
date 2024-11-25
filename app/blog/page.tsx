import { BlogPostsPreview } from 'components/BlogPostPreview';
import { BlogPostsPagination } from 'components/BlogPostsPagination';
//import { Header } from "@/components/Header";
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
         <h1
        id="blogs-headline"
        className="text-brand-primary my-3 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug"
      >
       Latest Blogs
      </h1>
         <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      </div>
     
    </>
  );
};

export default Page;
