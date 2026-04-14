import ConsoleLayout from "@/components/console/layout";
import { ReactNode } from "react";
import { Sidebar } from "@/types/blocks/sidebar";
import { getTranslations } from "next-intl/server";
import { getUserInfo } from "@/services/auth_user";
import { redirect } from "next/navigation";
import {
  isAuthEnabled,
  isLocalProtectedRouteBypassEnabled,
} from "@/lib/auth";

export default async function ({ children }: { children: ReactNode }) {
  const authEnabled = isAuthEnabled();
  const localProtectedRouteBypassEnabled = isLocalProtectedRouteBypassEnabled();

  if (!authEnabled && !localProtectedRouteBypassEnabled) {
    redirect("/");
  }

  const userInfo = authEnabled ? await getUserInfo() : null;

  if (authEnabled) {
    if (!userInfo || !userInfo.email) {
      redirect("/auth/signin");
    }
  }

  const t = await getTranslations();

  const sidebar: Sidebar = {
    nav: {
      items: [
        {
          title: t("user.my_orders"),
          url: "/my-orders",
          icon: "RiOrderPlayLine",
          is_active: false,
        },
        {
          title: t("my_credits.title"),
          url: "/my-credits",
          icon: "RiBankCardLine",
          is_active: false,
        },
        {
          title: t("my_invites.title"),
          url: "/my-invites",
          icon: "RiMoneyCnyCircleFill",
          is_active: false,
        },
        {
          title: t("api_keys.title"),
          url: "/api-keys",
          icon: "RiKey2Line",
          is_active: false,
        },
      ],
    },
  };

  return <ConsoleLayout sidebar={sidebar}>{children}</ConsoleLayout>;
}
