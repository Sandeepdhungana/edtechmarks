import Footer from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  );
}
