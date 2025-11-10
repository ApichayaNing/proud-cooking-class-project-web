import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"], // light, medium, bold
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Proud Cooking Class | Koh Pha-ngan 🇹🇭",
  description:
    "Learn authentic Thai cooking in a warm, hands-on class set in the heart of Koh Pha-ngan. Book your class today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}