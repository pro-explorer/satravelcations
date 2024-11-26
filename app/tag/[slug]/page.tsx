import { BlogPostsPreview } from "components/BlogPostPreview";
import { BlogPostsPagination } from "components/BlogPostsPagination";
import Footer from "components/layout/footer";
import { Badge } from "components/ui/badge";
import { wisp } from "lib/wisp";
import { CircleX } from "lucide-react";
import Link from "next/link";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

const Page = async ({
  params: { slug },
  searchParams,
}: {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, tags: [slug], page });

  return (
    <>
      <div className="container mx-auto px-5 mb-10">
        {/* Tag Badge */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/tag">
            <Badge className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
              <CircleX className="inline-block w-4 h-4 mr-2" />
              Posts tagged with <strong className="mx-2">#{slug}</strong>
            </Badge>
          </Link>
        </div>

        {/* Blog Post Previews */}
        <div className="my-8">
          <BlogPostsPreview posts={result.posts} />
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
          <BlogPostsPagination
            pagination={result.pagination}
            basePath={`/tag/${slug}/?page=`}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
