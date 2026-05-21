"use client";

import { ReportPreview } from "@/components/dashboard/ReportPreview";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";

export default function ReportPage() {
  function handlePrint() {
    window.print();
  }

  return (
    <AppShell>
      <section className="report-page-actions">
        <Button href="/mapa" variant="secondary">
          Voltar ao mapa
        </Button>

        <Button
          type="button"
          title="Baixar relatório em PDF"
          onClick={handlePrint}
        >
          Baixar PDF
        </Button>
      </section>

      <ReportPreview />
    </AppShell>
  );
}