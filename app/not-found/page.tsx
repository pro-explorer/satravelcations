import Footer from "components/layout/footer";
import NotFound from "components/not-found";

export async function generateMetadata() {
  return {
    title: "Page Not Found | SA Travelcations",
    description:
      "Oops! The page you’re looking for doesn’t exist. Return to SA Travelcations and continue planning your next adventure.",
    keywords:
      "SA Travelcations 404, page not found, error page, travel agency, adventure blog, South Africa travel",
    authors: [],
    robots: "noindex, follow",
  };
}







export default function NotFoundPage() {

  return (
    <>
     <NotFound/>
      <Footer />
    </>
  );
}

