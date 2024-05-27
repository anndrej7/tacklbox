import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function TacklboxLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto bg-gradient-to-b from-black to-mainRed">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
