import { Navbar } from "@/components/home/navbar";
import Footer from "@/components/home1/footer";
import TopNavigation from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* <TopNavigation /> */}
      {/* Place MobileNavBar here */}
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
