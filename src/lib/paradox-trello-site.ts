export const PARADOX_TRELLO_DOMAIN = "paradox-trello.lol";
export const PARADOX_TRELLO_SITE_NAME = "Paradox Trello";
export const PARADOX_TRELLO_UPDATED_AT = "2026-04-14";
export const PARADOX_TRELLO_OG_IMAGE =
  "/brand/paradox-trello/paradox-trello-og.png";

export const PARADOX_TRELLO_LINKS = {
  trello: "https://mirofish.my/",
  discord: "https://mirofish.my/",
  game: "https://mirofish.my/",
} as const;

export const PARADOX_TRELLO_METADATA = {
  title:
    "Paradox Trello: Official Board, Discord, Roblox Link, and What To Check First",
  description:
    "Fast, clean guide to the official Paradox Trello board, Discord server, and Roblox game page. Built for players searching paradox trello, paradox discord, or paradox roblox.",
  keywords: [
    "paradox trello",
    "paradox discord",
    "paradox roblox",
    "paradox board",
    "paradox roblox trello",
    "paradox roblox discord",
    "paradox release roblox",
    "paradox skill tree",
    "paradox accessories",
    "paradox npc locations",
  ],
} as const;

export const paradoxTrelloNav = [
  { label: "Resources", href: "#resources" },
  { label: "Board Map", href: "#board-map" },
  { label: "FAQ", href: "#faq" },
] as const;

export const paradoxTrelloChips = [
  "paradox trello",
  "paradox discord",
  "roblox paradox",
  "skill trees",
  "npc locations",
  "release updates",
] as const;

export const paradoxTrelloQuickFacts = [
  {
    label: "Official board",
    value: "NHLR344C",
    note:
      "The public Trello board ID tied to the main Paradox information board.",
  },
  {
    label: "Discord invite",
    value: "ableachgame",
    note:
      "The invite slug used by third-party guide hubs for the official Paradox server.",
  },
  {
    label: "Game page label",
    value: "[RELEASE]",
    note:
      "The current Roblox title reads “Paradox [RELEASE]” on the public game page.",
  },
] as const;

export const paradoxTrelloResourceCards = [
  {
    title: "Official Trello board",
    href: PARADOX_TRELLO_LINKS.trello,
    cta: "Open Trello Board",
    eyebrow: "Best for structured lookup",
    copy:
      "Use Trello when you need progression, race paths, items, accessories, talents, skill trees, or location-specific reference material.",
    note: "Public board reference verified on April 14, 2026.",
  },
  {
    title: "Official Discord server",
    href: PARADOX_TRELLO_LINKS.discord,
    cta: "Join Official Discord",
    eyebrow: "Best for live updates",
    copy:
      "Use Discord for announcements, patch notes, verification flow, giveaway drops, and the questions that usually move faster than static board updates.",
    note: "Invite slug currently resolves to discord.gg/ableachgame.",
  },
  {
    title: "Official Roblox game page",
    href: PARADOX_TRELLO_LINKS.game,
    cta: "Play Roblox Game",
    eyebrow: "Best for the correct entry point",
    copy:
      "Use the Roblox page to avoid clones, confirm you are opening the real experience, and jump into the live build directly.",
    note: "Current page title shows Paradox [RELEASE].",
  },
] as const;

export const paradoxTrelloBoardColumns = [
  {
    title: "Progression",
    items: [
      "Soul Reaper paths",
      "Hollow progression",
      "Quincy routes",
      "important unlock flow",
    ],
  },
  {
    title: "Build data",
    items: [
      "Shikai move lists",
      "Resurrection move lists",
      "talents and skill trees",
      "accessories and items",
    ],
  },
  {
    title: "World intel",
    items: [
      "important locations",
      "NPC lookup",
      "where to farm next",
      "what to verify in Discord",
    ],
  },
] as const;

export const paradoxTrelloDecisionCards = [
  {
    title: "Open Trello first",
    copy:
      "if your question is mechanical: where something is, what it unlocks, what your class path needs, or which list you should consult before grinding.",
  },
  {
    title: "Open Discord first",
    copy:
      "if your question is time-sensitive: whether a change is live, what just shifted in balance, or where developers posted the newest clarification.",
  },
  {
    title: "Open Roblox first",
    copy:
      "if your question is identity-related: am I on the right experience, is this the official page, and what exactly am I launching.",
  },
] as const;

export const paradoxTrelloFaqs = [
  {
    question: "Is this an official Paradox website?",
    answer:
      "No. This is an unofficial keyword page built to route players to the official Trello board, official Discord server, and official Roblox experience without making them dig through clones or outdated guides.",
  },
  {
    question: "What is the Paradox Trello board actually good for?",
    answer:
      "It is the fastest place to scan structured game information: progression paths, move lists, talents, accessories, items, and important locations. It is a lookup tool first, not a live announcement feed.",
  },
  {
    question: "Why link Discord if the Trello already exists?",
    answer:
      "Because Trello and Discord solve different problems. Trello is better for stable reference; Discord is better for announcements, clarification, and anything that may have changed since the last board edit.",
  },
  {
    question: "Which link should I open first?",
    answer:
      "If you are trying to understand the game, start with Trello. If you are chasing freshness, start with Discord. If you just need the real game page fast, open Roblox first.",
  },
  {
    question: "Why is this page English-only right now?",
    answer:
      "This version is intentionally focused on the English search query paradox trello so the core resource routing stays clear and avoids duplicate SEO pages while the site is still being rebuilt.",
  },
] as const;

export const PARADOX_TRELLO_FOOTER_NOTE =
  "Unofficial Paradox resource page. Official Trello, Discord, and Roblox links verified on April 14, 2026. Not affiliated with Roblox, Trello, Discord, or a bleach game.";

export function buildParadoxTrelloStructuredData(siteUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: PARADOX_TRELLO_SITE_NAME,
      url: siteUrl,
      description: PARADOX_TRELLO_METADATA.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: PARADOX_TRELLO_METADATA.title,
      url: siteUrl,
      dateModified: PARADOX_TRELLO_UPDATED_AT,
      description: PARADOX_TRELLO_METADATA.description,
      about: [
        "Paradox Trello",
        "Paradox Discord",
        "Paradox Roblox",
        "Paradox board",
      ],
      sameAs: [
        PARADOX_TRELLO_LINKS.trello,
        PARADOX_TRELLO_LINKS.discord,
        PARADOX_TRELLO_LINKS.game,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: paradoxTrelloFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
