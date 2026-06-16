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
  title: {
    default: "New Vedha | Education Franchise · Karnataka",
    template: "%s | New Vedha"
  },
  description:
    "Build a ₹2Cr+ education business with New Vedha. 5 revenue streams — Play Home, Preschool, Tutorials, Skill Academy & Exam Coaching. 55-60% profit margins. Break-even in 3-4 months.",
  keywords: ["education franchise Karnataka", "New Vedha franchise", "preschool franchise", "exam coaching franchise", "skill academy franchise"],
  openGraph: {
    title: "New Vedha Education Franchise · Karnataka",
    description:
      "Join 500+ education entrepreneurs. ₹2Cr+ revenue potential. 5-module ecosystem. Complete franchise support.",
    images: ["/new-vedha-logo.png"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
