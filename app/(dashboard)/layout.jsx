import { Navbar } from "@/components/navbar";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
}
