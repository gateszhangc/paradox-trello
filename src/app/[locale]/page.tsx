import ParadoxTrelloLanding from "@/components/landing/paradox-trello-landing";
import { getSiteUrl } from "@/lib/site-url";
import {
  PARADOX_TRELLO_METADATA,
  PARADOX_TRELLO_OG_IMAGE,
  PARADOX_TRELLO_SITE_NAME,
  buildParadoxTrelloStructuredData,
} from "@/lib/paradox-trello-site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const canonicalUrl = new URL("/en", siteUrl).toString();
  const indexable = locale === "en";

  return {
    title: PARADOX_TRELLO_METADATA.title,
    description: PARADOX_TRELLO_METADATA.description,
    keywords: PARADOX_TRELLO_METADATA.keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: indexable,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: PARADOX_TRELLO_METADATA.title,
      description: PARADOX_TRELLO_METADATA.description,
      siteName: PARADOX_TRELLO_SITE_NAME,
      images: [
        {
          url: `${siteUrl}${PARADOX_TRELLO_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: "Paradox Trello editorial poster",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PARADOX_TRELLO_METADATA.title,
      description: PARADOX_TRELLO_METADATA.description,
      images: [`${siteUrl}${PARADOX_TRELLO_OG_IMAGE}`],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const siteUrl = getSiteUrl();
  const structuredData = buildParadoxTrelloStructuredData(
    new URL("/en", siteUrl).toString()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ParadoxTrelloLanding />
    </>
  );
}
