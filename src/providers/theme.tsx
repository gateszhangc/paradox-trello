"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { useLocale } from "next-intl";
import { Toaster } from "sonner";
import { isAuthEnabled } from "@/lib/auth";
import Analytics, { type AnalyticsConfig } from "@/components/analytics";
import Adsense from "./adsense";
import SignModalPortal from "@/components/sign/modal-portal";

type ThemeProviderProps = {
  children: ReactNode;
  analyticsConfig?: AnalyticsConfig;
};

export function ThemeProvider({
  children,
  analyticsConfig,
}: ThemeProviderProps) {
  const locale = useLocale();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={process.env.NEXT_PUBLIC_DEFAULT_THEME || "system"}
      enableSystem
      disableTransitionOnChange
      value={{ light: "light", dark: "dark" }}
    >
      {children}

      <Toaster position="top-center" richColors />
      <Analytics {...analyticsConfig} />

      {isAuthEnabled() && <SignModalPortal />}

      <Adsense />
    </NextThemesProvider>
  );
}
