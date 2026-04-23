import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "teenage engineering",
  description:
    "teenage engineering creates products and communication for a future audience. our mission is to use advanced engineering to make high-quality functional design products.",
  icons: { icon: "/seo/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
