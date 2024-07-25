import TopNavigation from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      
      {/* Place MobileNavBar here */}

      {children}
    </main>
  );
}
