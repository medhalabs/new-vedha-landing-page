import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newvedha.com"),
  title: "New Vedha Pre School | Ancient Wisdom, Modern Minds",
  description:
    "New Vedha is a vision-driven preschool and education ecosystem shaping young minds through joyful learning, character development, and future-ready foundations.",
  openGraph: {
    title: "New Vedha Pre School",
    description:
      "Beyond teaching. We shape minds through joyful early learning and a complete education ecosystem.",
    images: ["/new-vedha-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
