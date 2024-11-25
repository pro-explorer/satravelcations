import Footer from 'components/layout/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="mx-8 max-w-6xl pb-20  sm:mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
