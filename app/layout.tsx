import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsScripts, GtmNoScript } from "@/components/Analytics";
import { ClickTracker } from "@/components/ClickTracker";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
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

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GROOTIT | Web Design, Branding & AI Agency in Sri Lanka",
    template: "%s | GROOTIT",
  },
  description:
    "GROOTIT is a Creative + AI agency in Sri Lanka. We build brand identities, websites, AI automation and digital marketing that help businesses get found and win customers.",
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_LK",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(gscVerification ? { google: gscVerification } : {}),
    ...(bingVerification
      ? { other: { "msvalidate.01": bingVerification } }
      : {}),
  },
  other: {
    "google-adsense-account": "ca-pub-2298031085919843",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2298031085919843"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white text-[#0B132B] selection:bg-[#0066FF] selection:text-white">
        <GtmNoScript />
        {children}
        <FloatingWhatsApp />
        <ClickTracker />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
