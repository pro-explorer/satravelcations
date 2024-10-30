import Footer from 'components/layout/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto px-5 mb-10">{children}</div>
      </div>
      <Footer />
    </>
  );
}
