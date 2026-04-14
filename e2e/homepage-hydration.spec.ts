import { expect, test } from "@playwright/test";

test("homepage hydrates without missing next chunks", async ({ page }) => {
  const missingChunkRequests: string[] = [];

  page.on("response", (response) => {
    if (
      response.status() === 404 &&
      response.url().includes("/_next/static/chunks/")
    ) {
      missingChunkRequests.push(response.url());
    }
  });

  const response = await page.goto("/en", { waitUntil: "domcontentloaded" });

  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", { name: /Paradox Trello/i, level: 1 })
  ).toBeVisible();
  await page.getByRole("link", { name: /Resources/i }).press("Enter");
  await expect(page).toHaveURL(/#resources$/);
  await expect(
    page.getByRole("heading", {
      name: /Open the official Paradox links without digging through clones\./i,
      level: 2,
    })
  ).toBeVisible();

  expect(missingChunkRequests).toEqual([]);
});
