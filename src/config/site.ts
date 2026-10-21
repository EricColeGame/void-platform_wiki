export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Void Platform Wiki",
  shortName: "Void Platform",
  logoText: "VP",
  tagline: "Controls, Wall Jumps, Dashes & Level Guides",
  description: "Explore Void Platform with gameplay basics, wall-jump and dash controls, coin-collecting tips, spike hazards, and practical level guides for new players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://void-platform.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://void-platform.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://zewp.com/bbobop/voidplatform.html",
  heroVideoId: "TTGLGQcvKIg",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
