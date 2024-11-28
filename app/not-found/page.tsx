import Footer from "components/layout/footer";
import { config } from "config";
import { signOgImageUrl } from "lib/og-image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "404",
    description: "Something went wrong",
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

export default async function NotFound() {

  return (
    <>
     <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page not found</h1>
      <p className="text-small-regular text-ui-fg-base">
        The page you tried to access does not exist.
      </p>
      <Link
        className="flex gap-x-1 items-center group"
        href="/"
      >
        <p className="text-ui-fg-interactive">Go to frontpage</p>
        <ArrowUpRight
          className="group-hover:rotate-45 ease-in-out duration-150"
          color="var(--fg-interactive)"
        />
      </Link>
    </div>

      <Footer />
    </>
  );
}

