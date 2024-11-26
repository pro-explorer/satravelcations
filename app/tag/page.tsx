import Footer from "components/layout/footer";
import { config } from "config";
import { signOgImageUrl } from "lib/og-image";
import { wisp } from "lib/wisp";
import { TagItem } from "./tag";

export async function generateMetadata() {
  return {
    title: "Explore Tags",
    description: "Browse through various blog post categories",
    openGraph: {
      title: "Explore Tags",
      description: "Browse through various blog post categories",
      images: [
        signOgImageUrl({
          title: "Blog Post Categories",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

export default async function Page() {
  const result = await wisp.getTags();

  return (
    <>
      <div className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Explore Tags
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Browse through different blog categories. Each tag represents a unique topic that lets you dive into your favorite areas of interest.
          </p>

          {/* Tags Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">
            {result.tags.map((tag) => (
              <TagItem key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

