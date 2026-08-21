/**
 * CalcSaathi - Core Calculator Registry & Types
 * Pure TypeScript calculation engine (client-side execution).
 * Ready for 15+ MVP calculators.
 */

export interface CalculationResult {
  title: string;
  summary: string;
  keyMetrics: { label: string; value: string | number }[];
}

export {};
