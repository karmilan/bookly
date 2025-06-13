import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookly",
  description: "A book management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
