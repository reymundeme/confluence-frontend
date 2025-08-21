import "./globals.css";
import Navbar from "@/components/Navbar";
import MiniHeader from "@/components/MiniHeader";
import Footer from "@/components/Footer";


export const metadata = {
  title: "My Website",
  description: "A Next.js 15.4.6 project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MiniHeader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
