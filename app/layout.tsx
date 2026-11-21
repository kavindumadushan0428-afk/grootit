import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grootit.studio"),
  title: {
    default: "GROOTIT — Creativity Meets Intelligence",
    template: "%s | GROOTIT",
  },
  description:
    "GROOTIT is a hybrid Creative + AI agency based in Sri Lanka, working with businesses internationally across AI & Automation, Creative & Branding, Web & Digital Experiences, and Digital Growth.",
  keywords: [
    "GROOTIT",
    "Creative AI Agency",
    "AI & Automation",
    "Creative & Branding",
    "Web & Digital Experiences",
    "Digital Growth",
    "Sri Lanka Creative Technology Studio",
  ],
  openGraph: {
    title: "GROOTIT — Creativity Meets Intelligence",
    description:
      "We build brands, craft digital experiences and create intelligent solutions designed for business growth.",
    images: ["/grootit-logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-[#0B132B] selection:bg-[#0066FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
