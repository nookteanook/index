import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.expert8-solution.com/smart-clinic-hub";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart Clinic Hub | All-in-One Clinic Management Platform",
    template: "%s | Smart Clinic Hub",
  },
  description:
    "Smart Clinic Hub is an all-in-one clinic management platform that automates appointments, electronic health records, billing, and patient communications — helping clinics deliver better care efficiently.",
  keywords: [
    "clinic management software",
    "clinic management system",
    "electronic health records",
    "EHR software",
    "appointment scheduling software",
    "medical billing software",
    "patient management system",
    "smart clinic hub",
    "healthcare software",
    "clinic automation",
    "telemedicine platform",
    "medical practice management",
    "HIPAA compliant clinic software",
    "online appointment booking",
    "clinic dashboard",
  ],
  authors: [
    { name: "Expert8 Solution", url: "https://www.expert8-solution.com" },
  ],
  creator: "Expert8 Solution",
  publisher: "Expert8 Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Smart Clinic Hub | All-in-One Clinic Management Platform",
    description:
      "Automate appointments, health records, billing, and patient communications. Smart Clinic Hub helps clinics run smarter and deliver better care.",
    siteName: "Smart Clinic Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Clinic Hub — All-in-One Clinic Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Clinic Hub | All-in-One Clinic Management Platform",
    description:
      "Automate appointments, health records, billing, and patient communications with Smart Clinic Hub.",
    images: ["/og-image.png"],
    creator: "@expert8solution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "healthcare technology",
  verification: {
    google: "your-google-site-verification-token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Smart Clinic Hub",
      description:
        "All-in-One Clinic Management Platform by Expert8 Solution",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Smart Clinic Hub",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 200,
        height: 60,
      },
      sameAs: ["https://www.expert8-solution.com"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Smart Clinic Hub",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Medical Practice Management Software",
      operatingSystem: "Web Browser, iOS, Android",
      description:
        "All-in-one clinic management software for scheduling, EHR, billing, and patient communications.",
      url: siteUrl,
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "49",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "49",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "99",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "0",
          priceCurrency: "USD",
          description: "Custom pricing for large organizations",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "312",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Smart Clinic Hub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Smart Clinic Hub is an all-in-one clinic management platform that automates appointment scheduling, electronic health records (EHR), billing, and patient communications to help clinics operate more efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Is Smart Clinic Hub HIPAA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Smart Clinic Hub is fully HIPAA compliant. All patient data is encrypted at rest and in transit with enterprise-grade security standards.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try Smart Clinic Hub for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
          },
        },
        {
          "@type": "Question",
          name: "Does Smart Clinic Hub support multiple clinic locations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Smart Clinic Hub supports multi-location management, allowing you to manage multiple clinic branches from a single unified dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "How does Smart Clinic Hub handle billing and insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Smart Clinic Hub includes integrated billing with automated insurance claim submission, real-time eligibility verification, and payment tracking to streamline your revenue cycle.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
