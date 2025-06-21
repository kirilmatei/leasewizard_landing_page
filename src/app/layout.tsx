import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "LeaseWizard | AI Lease Contract Abstractions",
  description: "Automate your lease analysis with AI. Extract key dates, terms, and conditions from lease documents instantly. Save time and reduce errors.",
  keywords: "lease abstraction, AI lease management, document extraction, lease automation, critical dates, lease administration",
  authors: [{ name: "LeaseWizard.ai" }],
  robots: "index, follow",
  verification: {
    google: "G-SSS2MMRR50",
  },
  openGraph: {
    type: "website",
    url: "https://leasewizard.ai/",
    title: "LeaseWizard.ai - AI-Powered Lease Analysis",
    description: "Automate your lease analysis with AI. Extract key dates and terms instantly.",
    images: "/images/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://leasewizard.ai/",
    title: "LeaseWizard.ai - AI-Powered Lease Analysis",
    description: "Automate your lease analysis with AI. Extract key dates and terms instantly.",
    images: "/images/favicon.png",
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
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SSS2MMRR50"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SSS2MMRR50');
          `}
        </Script>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "LeaseWizard.ai",
              "applicationCategory": "BusinessApplication",
              "description": "AI-powered lease abstraction tool",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
