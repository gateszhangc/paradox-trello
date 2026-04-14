import { defineConfig, devices } from '@playwright/test';

const playwrightPort = process.env.PLAYWRIGHT_PORT || '3002';
const playwrightBaseUrl = `http://localhost:${playwrightPort}`;
const playwrightWebServerCommand = [
  "env",
  "BACKEND_AUTOSTART=false",
  "NEXT_RUNTIME_PROFILE=playwright",
  "NEXT_DIST_DIR=.next/dev-playwright",
  `PLAYWRIGHT_PORT=${playwrightPort}`,
  `NEXT_PUBLIC_WEB_URL=${playwrightBaseUrl}`,
  "NODE_NO_WARNINGS=1",
  "NEXT_PUBLIC_AUTH_DISABLED=true",
  "node",
  "node_modules/next/dist/bin/next",
  "dev",
  "--port",
  playwrightPort,
].join(" ");

export default defineConfig({
  testDir: './e2e',
  timeout: 60 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  webServer: {
    command: playwrightWebServerCommand,
    url: `${playwrightBaseUrl}/en`,
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_EXISTING_SERVER === 'true',
    timeout: 120 * 1000,
  },
  use: {
    baseURL: playwrightBaseUrl,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
