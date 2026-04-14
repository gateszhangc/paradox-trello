"use client";

import Script from "next/script";

type GoogleAnalyticsProps = {
  analyticsId?: string;
};

export default function GoogleAnalytics({
  analyticsId = "",
}: GoogleAnalyticsProps) {
  const normalizedAnalyticsId = analyticsId.trim();

  // Do not track in development
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  if (!normalizedAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${normalizedAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${normalizedAnalyticsId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
