import { expect, test } from "@playwright/test";

test("paradox trello landing exposes the three official resource links", async ({
  page,
}) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });

  await expect(
    page.getByRole("heading", { name: /Paradox Trello/i, level: 1 })
  ).toBeVisible();
  await expect(
    page.getByText(/The cleanest path to the official Paradox Trello board/i)
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /Open Trello Board/i }).first()
  ).toHaveAttribute("href", "https://trello.com/b/NHLR344C/paradox-information");
  await expect(
    page.getByRole("link", { name: /Join Official Discord/i }).first()
  ).toHaveAttribute("href", "https://discord.gg/ableachgame");
  await expect(
    page.getByRole("link", { name: /Play Roblox Game/i }).first()
  ).toHaveAttribute("href", "https://www.roblox.com/games/9870517705/Paradox");

  await expect(page.getByText("NHLR344C", { exact: true })).toBeVisible();
  await expect(page.getByText("ableachgame", { exact: true })).toBeVisible();
  await expect(page.getByText("[RELEASE]", { exact: true })).toBeVisible();
});

test("paradox trello landing renders board-map and faq guidance", async ({
  page,
}) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });

  await page.getByRole("link", { name: /Board Map/i }).click();
  await expect(page).toHaveURL(/#board-map$/);
  await expect(page.getByText(/Soul Reaper paths/i)).toBeVisible();
  await expect(page.getByText(/Shikai move lists/i)).toBeVisible();
  await expect(page.getByText(/important locations/i)).toBeVisible();

  await page.getByRole("link", { name: /FAQ/i }).click();
  await expect(page).toHaveURL(/#faq$/);

  const faqTrigger = page.getByRole("button", {
    name: /Which link should I open first\?/i,
  });
  await expect
    .poll(async () => {
      await faqTrigger.click();
      return await faqTrigger.getAttribute("aria-expanded");
    }, { timeout: 15000 })
    .toBe("true");
  await expect(
    page.getByText(/If you are trying to understand the game, start with Trello/i)
  ).toBeVisible();
  await expect(
    page.getByText(/Unofficial Paradox resource page\./i)
  ).toBeVisible();
});
