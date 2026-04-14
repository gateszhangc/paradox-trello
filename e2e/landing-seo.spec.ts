import { expect, test } from "@playwright/test";

test("english homepage is canonical and indexable", async ({ page }) => {
  const response = await page.goto("/en", { waitUntil: "domcontentloaded" });

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /index, follow/i
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "http://localhost:3002/en"
  );
  expect(response?.headers()["link"] || "").not.toContain('hreflang="');
});

test("legacy routes stay noindex and sitemap only exposes /en", async ({
  page,
  request,
}) => {
  await page.goto("/en/pricing", { waitUntil: "domcontentloaded" });

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex, follow/i
  );

  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBeTruthy();
  expect.soft(await robotsResponse.text()).toContain(
    "Sitemap: http://localhost:3002/sitemap.xml"
  );

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  const sitemapXml = await sitemapResponse.text();
  expect(sitemapXml).toContain("<loc>http://localhost:3002/en</loc>");
  expect(sitemapXml).not.toContain("/zh");
});
