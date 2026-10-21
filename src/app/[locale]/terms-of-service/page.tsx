import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site at void-platform.wiki is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Game mechanics, levels, and update details may change without notice. Always verify important information in the game or through official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Void Platform property.</p>
      <p>For questions about these terms, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
