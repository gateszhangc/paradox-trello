import "@/app/globals.css";

import { getLocale, setRequestLocale } from "next-intl/server";

const readRuntimeEnv = (key: string) => process.env[key]?.trim() || "";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const googleAdsenseCode = readRuntimeEnv("NEXT_PUBLIC_GOOGLE_ADCODE");
  const clarityId = readRuntimeEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID");
  const analyticsId = readRuntimeEnv("NEXT_PUBLIC_GOOGLE_ANALYTICS_ID");

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {googleAdsenseCode && (
          <meta name="google-adsense-account" content={googleAdsenseCode} />
        )}

        {analyticsId && (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        )}
        {clarityId && <link rel="dns-prefetch" href="https://clarity.ms" />}

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
