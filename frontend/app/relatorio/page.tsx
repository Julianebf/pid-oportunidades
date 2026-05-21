import { ReportPreview } from "@/components/dashboard/ReportPreview";
import { PrintButton } from "@/components/dashboard/PrintButton";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";

export default async function ReportPage() {
  return (
    <AppShell>
      <section className="report-page-actions">
        <Button href="/mapa" variant="secondary">
          Voltar ao mapa
        </Button>

        <PrintButton />
      </section>

      <ReportPreview />
    </AppShell>
  );
}