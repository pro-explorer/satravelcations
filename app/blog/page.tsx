import { BlogPostsPreview } from "components/BlogPostPreview";
import { BlogPostsPagination } from "components/BlogPostsPagination";
//import { Header } from "@/components/Header";
import { wisp } from "lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>
    <h1 className="mb-8 text-5xl font-bold">Blog</h1>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
    </>
  );
};

export default Page;
