import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

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
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
