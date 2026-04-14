import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { AppContextProvider } from "@/contexts/app";
import { Metadata } from "next";
import { NextAuthSessionProvider } from "@/auth/session";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme";
import { getSiteUrl } from "@/lib/site-url";
import {
  PARADOX_TRELLO_METADATA,
  PARADOX_TRELLO_OG_IMAGE,
  PARADOX_TRELLO_SITE_NAME,
} from "@/lib/paradox-trello-site";

const readRuntimeEnv = (key: string) => process.env[key]?.trim() || "";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${PARADOX_TRELLO_SITE_NAME}`,
      default: PARADOX_TRELLO_METADATA.title,
    },
    description: PARADOX_TRELLO_METADATA.description,
    keywords: PARADOX_TRELLO_METADATA.keywords.join(", "),
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      type: "website",
      siteName: PARADOX_TRELLO_SITE_NAME,
      title: PARADOX_TRELLO_METADATA.title,
      description: PARADOX_TRELLO_METADATA.description,
      images: [
        {
          url: PARADOX_TRELLO_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Paradox Trello editorial poster",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  const analyticsConfig = {
    googleAnalyticsId: readRuntimeEnv("NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"),
    clarityId: readRuntimeEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID"),
    logRocketAppId: readRuntimeEnv("NEXT_PUBLIC_LOGROCKET_APP_ID"),
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <NextAuthSessionProvider>
        <AppContextProvider>
          <ThemeProvider analyticsConfig={analyticsConfig}>
            {children}
          </ThemeProvider>
        </AppContextProvider>
      </NextAuthSessionProvider>
    </NextIntlClientProvider>
  );
}
