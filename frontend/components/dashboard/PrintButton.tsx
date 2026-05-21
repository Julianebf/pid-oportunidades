"use client";

import { Button } from "@/components/ui/Button";

export function PrintButton() {
  function handlePrint() {
    window.print();
  }

  return (
    <Button
      type="button"
      title="Abrir diálogo de impressão para salvar o relatório em PDF"
      onClick={handlePrint}
    >
      Baixar PDF
    </Button>
  );
}