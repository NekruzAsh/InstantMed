import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instant Med",
  description: "Generated by create next app",
};

//components
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Items from "./components/items";
import About from "./components/about"
import Chat from "./components/chatBox";
import Cart from "./components/cart";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Chat />
        <Landing />
        <Items />
        <About />
        <Chat />
        <Cart />
        {children}</body>
    </html>
  );
}
