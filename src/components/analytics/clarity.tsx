"use client";

import Script from "next/script";

type ClarityAnalyticsProps = {
  clarityId?: string;
};

export default function ClarityAnalytics({
  clarityId = "",
}: ClarityAnalyticsProps) {
  const normalizedClarityId = clarityId.trim();

  // Do not track in development
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  if (!normalizedClarityId) {
    return null;
  }

  return (
    <Script id="ms-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${normalizedClarityId}");
      `}
    </Script>
  );
}
