import type {
  DecarbonizationScenario,
  InvestmentRegionsResponse,
  RestrictionLayersResponse,
  ReportData,
  DatasetsStatusResponse,
} from "@/lib/types";

// Base URL
const BASE_URL =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

console.log("BASE_URL:", BASE_URL);

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const url = `${BASE_URL}${path}`;

    console.log("Fetching:", url);

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    console.log("Status:", res.status);

    if (!res.ok) {
      const text = await res.text();

      console.error("API ERROR:");
      console.error(text);

      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return null;
  }
}

export async function getDecarbonizationScenario(): Promise<DecarbonizationScenario | null> {
  return await fetchJson<DecarbonizationScenario>(
    "/api/decarbonization/scenario/roraima"
  );
}

export async function getInvestmentRegions(): Promise<InvestmentRegionsResponse | null> {
  return await fetchJson<InvestmentRegionsResponse>(
    "/api/decarbonization/regions/roraima"
  );
}

export async function getRestrictionLayers(): Promise<RestrictionLayersResponse | null> {
  return await fetchJson<RestrictionLayersResponse>(
    "/api/decarbonization/restrictions/roraima"
  );
}

export async function getReportData(): Promise<ReportData | null> {
  return await fetchJson<ReportData>(
    "/api/decarbonization/report/roraima"
  );
}

export async function getDatasetsStatus(): Promise<DatasetsStatusResponse | null> {
  return await fetchJson<DatasetsStatusResponse>(
    "/api/datasets/status"
  );
}

export async function getMethodology(): Promise<any | null> {
  return await fetchJson<any>(
    "/api/decarbonization/methodology"
  );
}