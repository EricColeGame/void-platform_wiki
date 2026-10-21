import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Void Platform, its original game assets, logos, and related media belong to their respective owners.</p>
      <p>Void Platform Wiki is a non-official fan project created for educational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
