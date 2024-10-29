
import Layout from "app/[page]/layout";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: 'Contact' })

export const dynamic = 'force-dynamic';

export default async function ContactPage() {

  return(
  <Layout>
  <div></div>
  </Layout>);
}

// export const revalidate = 60;
