import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="lg:mt-[91px]">{children}</main>
      <Footer />
    </>
  );
}
