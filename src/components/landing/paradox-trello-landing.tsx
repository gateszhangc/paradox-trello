import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Mono, Newsreader } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PARADOX_TRELLO_FOOTER_NOTE,
  PARADOX_TRELLO_SITE_NAME,
  paradoxTrelloBoardColumns,
  paradoxTrelloChips,
  paradoxTrelloDecisionCards,
  paradoxTrelloFaqs,
  paradoxTrelloNav,
  paradoxTrelloQuickFacts,
  paradoxTrelloResourceCards,
} from "@/lib/paradox-trello-site";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ParadoxTrelloLanding() {
  return (
    <main className="bg-[#050505] text-[#f4efe6]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/brand/paradox-trello/paradox-trello-hero.png"
          alt="Abstract paradox maze artwork"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,246,201,0.16),transparent_34%),linear-gradient(180deg,rgba(5,5,5,0.42)_0%,rgba(5,5,5,0.78)_58%,rgba(5,5,5,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(119,246,201,0.9),rgba(255,255,255,0.2),transparent)]" />

        <div className="relative mx-auto flex min-h-[96vh] w-full max-w-7xl flex-col justify-between px-5 pb-10 pt-6 sm:px-8 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/en"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/86"
            >
              <Image
                src="/brand/paradox-trello/paradox-trello-mark.svg"
                alt="Paradox Trello mark"
                width={38}
                height={38}
                className="rounded-md border border-white/12 bg-black/40"
              />
              <span className={display.className}>{PARADOX_TRELLO_SITE_NAME}</span>
            </Link>

            <nav
              className={`${mono.className} flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-white/72 sm:text-xs`}
            >
              {paradoxTrelloNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#77f6c9]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:py-28">
            <div>
              <p
                className={`${mono.className} text-xs uppercase tracking-[0.34em] text-[#77f6c9] sm:text-sm`}
              >
                Official links, fast
              </p>
              <h1
                className={`${display.className} mt-4 max-w-4xl text-[4.2rem] uppercase leading-[0.88] text-[#f8f4ec] sm:text-[5.8rem] lg:text-[7.8rem]`}
              >
                Paradox Trello
              </h1>
              <p
                className={`${editorial.className} mt-5 max-w-3xl text-balance text-xl leading-9 text-white/84 sm:text-[1.7rem] sm:leading-10`}
              >
                The cleanest path to the official Paradox Trello board, Discord
                server, and Roblox game page.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                Built for players who search <strong>paradox trello</strong> when
                they need progression data, move lists, accessories, NPC
                locations, or the fastest route to verified update channels.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {paradoxTrelloResourceCards.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 bg-black/30 px-5 text-sm font-semibold text-white transition hover:border-[#77f6c9] hover:text-[#77f6c9]"
                  >
                    {item.cta}
                  </a>
                ))}
              </div>

              <div
                className={`${mono.className} mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:text-xs`}
              >
                {paradoxTrelloChips.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/12 bg-black/28 px-3 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,9,9,0.92),rgba(14,14,14,0.86))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-md">
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em] text-[#77f6c9]`}
              >
                Verification note
              </p>
              <p className="mt-3 text-sm leading-7 text-white/74">
                This page is intentionally narrow: one keyword, three official
                destinations, no fake all-in-one ownership claim.
              </p>
              <div className="mt-6 space-y-3">
                {paradoxTrelloQuickFacts.map((fact) => (
                  <article
                    key={fact.label}
                    className="rounded-2xl border border-white/10 bg-black/24 px-4 py-4"
                  >
                    <p
                      className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-white/54`}
                    >
                      {fact.label}
                    </p>
                    <p
                      className={`${display.className} mt-2 text-3xl uppercase leading-none text-[#f7f3eb]`}
                    >
                      {fact.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/66">
                      {fact.note}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="resources" className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#77f6c9]`}
              >
                Resources
              </p>
              <h2
                className={`${editorial.className} mt-4 max-w-4xl text-4xl leading-tight text-[#f8f4ec] sm:text-5xl`}
              >
                Open the official Paradox links without digging through clones.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              Trello is the structured lookup layer. Discord is the live update
              layer. Roblox is the identity checkpoint that gets you into the
              real experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {paradoxTrelloResourceCards.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,11,11,0.96),rgba(17,17,17,0.82))] p-6 transition hover:-translate-y-1 hover:border-[#77f6c9]/40"
              >
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.22em] text-[#77f6c9]`}
                >
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#f8f4ec]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.copy}</p>
                <p
                  className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.18em] text-white/50`}
                >
                  {item.note}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 px-4 text-sm font-semibold text-white transition group-hover:border-[#77f6c9] group-hover:text-[#77f6c9]"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="board-map" className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-12 lg:py-20">
          <div>
            <p
              className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#77f6c9]`}
            >
              Board map
            </p>
            <h2
              className={`${editorial.className} mt-4 max-w-4xl text-4xl leading-tight text-[#f8f4ec] sm:text-5xl`}
            >
              Trello matters because Paradox questions are usually lookup
              questions before they are conversation questions.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Most players search this keyword because they want one of three
              things quickly: how to progress, how to compare a build path, or
              where an important in-game element sits. That is exactly where the
              board outperforms scattered guide pages.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {paradoxTrelloBoardColumns.map((column) => (
                <article
                  key={column.title}
                  className="rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-[#f8f4ec]">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                    {column.items.map((item) => (
                      <li key={item} className="border-t border-white/8 pt-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <figure className="overflow-hidden rounded-[1.75rem] border border-white/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/brand/paradox-trello/paradox-trello-og.png"
                  alt="Paradox Trello editorial poster"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
              </div>
            </figure>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] px-5 py-5">
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#77f6c9]`}
              >
                Reading rule
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Use Trello for stable knowledge, Discord for recency, and Roblox
                for identity confirmation. Treat each link as a different tool,
                not as three interchangeable buttons.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p
            className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#77f6c9]`}
          >
            Start here
          </p>
          <h2
            className={`${editorial.className} mt-4 max-w-4xl text-4xl leading-tight text-[#f8f4ec] sm:text-5xl`}
          >
            Start with the link that solves your immediate problem.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {paradoxTrelloDecisionCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,13,13,0.95),rgba(18,18,18,0.84))] px-5 py-5"
              >
                <h3
                  className={`${display.className} text-3xl uppercase leading-none text-[#f8f4ec]`}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p
            className={`${mono.className} text-xs uppercase tracking-[0.28em] text-[#77f6c9]`}
          >
            FAQ
          </p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
            <div>
              <h2
                className={`${editorial.className} text-4xl leading-tight text-[#f8f4ec] sm:text-5xl`}
              >
                A sharper answer to the search query than another generic link
                dump.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                The point is not to impersonate the game. The point is to help a
                player land on the right official surface quickly, with enough
                context to know why each surface exists.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] px-5"
            >
              {paradoxTrelloFaqs.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#f8f4ec] hover:text-[#77f6c9]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-white/68">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <footer className="mt-16 flex flex-wrap items-start justify-between gap-5 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/paradox-trello/paradox-trello-mark.svg"
                alt="Paradox Trello mark"
                width={34}
                height={34}
                className="rounded-md border border-white/10"
              />
              <span
                className={`${display.className} text-2xl uppercase tracking-[0.08em] text-[#f8f4ec]`}
              >
                {PARADOX_TRELLO_SITE_NAME}
              </span>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-white/56">
              {PARADOX_TRELLO_FOOTER_NOTE}
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
