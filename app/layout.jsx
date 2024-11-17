import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ZipLynk</title>
      </head>
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
