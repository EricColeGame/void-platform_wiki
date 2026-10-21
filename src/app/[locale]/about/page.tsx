import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Void Platform Wiki at void-platform.wiki is an independent fan-built guide hub covering wall jumps, dashes, spike hazards, coin routes, controls, and practical level walkthroughs for new and returning players.</p>
      <p>The site is designed as a clean, community-focused reference for a browser-based precision platformer and is not affiliated with the original game creator or publisher.</p>
      <p>Questions, corrections, and feedback can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
