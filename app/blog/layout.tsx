import Footer from 'components/layout/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className=" mb-10">{children}</div>
      </div>
      <Footer />
    </>
  );
}
