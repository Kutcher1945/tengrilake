import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.tengrilake.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Tengrilake.AI — Национальная инфраструктура данных для государственного управления",
    template: "%s | Tengrilake.AI",
  },

  description:
    "Tengrilake.AI — защищённая и масштабируемая платформа данных государственного уровня для межведомственной интеграции, стратегического планирования и доказательного управления.",

  keywords: [
    "инфраструктура данных",
    "государственное управление",
    "межведомственная интеграция данных",
    "цифровая трансформация государственного управления",
    "доказательное управление",
    "data governance",
    "государственная аналитика",
    "единая система управления данными",
    "национальная платформа данных",
    "суверенитет данных",
    "государственная платформа данных",
    "цифровая трансформация госуправления",
    "инфраструктура данных для государственного управления",
    "национальная инфраструктура данных",
  ],

  authors: [{ name: "Tengrilake.AI", url: BASE_URL }],
  creator: "Tengrilake.AI",
  publisher: "Tengrilake.AI",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "Tengrilake.AI",
    title:
      "Tengrilake.AI — Национальная инфраструктура данных для государственного управления",
    description:
      "Защищённая и масштабируемая платформа данных государственного уровня для межведомственной интеграции, стратегического планирования и доказательного управления.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tengrilake.AI — Инфраструктура данных государственного уровня",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tengrilake.AI — Национальная инфраструктура данных для государственного управления",
    description:
      "Защищённая платформа данных государственного уровня для межведомственной интеграции и доказательного управления.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "ru-RU": `${BASE_URL}/ru`,
      "kk-KZ": `${BASE_URL}/kk`,
      "en-US": `${BASE_URL}/en`,
    },
  },

  category: "technology",
};

// JSON-LD structured data (Organization + WebPage + FAQPage)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Tengrilake.AI",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo/logo-white-letters.png`,
        width: 220,
        height: 50,
      },
      description:
        "Национальная цифровая инфраструктура данных для доказательного государственного управления.",
      knowsAbout: [
        "Инфраструктура данных",
        "Государственное управление",
        "Межведомственная интеграция данных",
        "Data Governance",
        "Цифровая трансформация",
        "Суверенитет данных",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Tengrilake.AI",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: ["ru-RU", "kk-KZ", "en-US"],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Tengrilake.AI — Национальная инфраструктура данных для государственного управления",
      description:
        "Защищённая и масштабируемая платформа данных государственного уровня для межведомственной интеграции, стратегического планирования и доказательного управления.",
      inLanguage: "ru-RU",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Что такое инфраструктура данных государственного уровня?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Централизованная платформа, объединяющая данные из различных ведомств в единое управляемое пространство для аналитики, стратегического планирования и принятия решений на основе доказательных данных.",
          },
        },
        {
          "@type": "Question",
          name: "Как обеспечивается суверенитет данных?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tengrilake.AI поддерживает развёртывание на собственной государственной инфраструктуре, в государственном облаке или в гибридной среде. Все данные остаются под юрисдикцией заказчика.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли развернуть платформу на государственной инфраструктуре?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Платформа поддерживает полноценное on-premises развёртывание, обеспечивая полный контроль над данными внутри государственного периметра безопасности.",
          },
        },
        {
          "@type": "Question",
          name: "Соответствует ли система требованиям регуляторов?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tengrilake.AI спроектирован с учётом требований государственного сектора: ролевое управление доступом (RBAC), сквозное шифрование, полное журналирование аудита и прослеживаемость данных на протяжении всего жизненного цикла.",
          },
        },
        {
          "@type": "Question",
          name: "Для каких уровней государственного управления подходит платформа?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Платформа масштабируется от муниципальных проектов до национальных экосистем данных — поддерживается развёртывание на муниципальном, региональном и национальном уровнях.",
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
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
