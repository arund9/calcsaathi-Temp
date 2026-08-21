/**
 * Indian Number Formatting Utilities (Lakh / Crore)
 * Adheres to Indian numbering system: 1,00,000 (1 Lakh) and 1,00,00,000 (1 Crore)
 */

export function formatINR(amount: number, includeDecimals = false): string {
  if (isNaN(amount)) return '₹0';
  
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: includeDecimals ? 2 : 0,
    minimumFractionDigits: includeDecimals ? 2 : 0,
  }).format(absAmount);

  return `${isNegative ? '-' : ''}₹${formatted}`;
}

export function formatCompactINR(amount: number): string {
  if (isNaN(amount) || amount === 0) return '₹0';
  const abs = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  if (abs >= 10000000) {
    const cr = abs / 10000000;
    return `${sign}₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (abs >= 100000) {
    const lakh = abs / 100000;
    return `${sign}₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(2)} L`;
  }
  if (abs >= 1000) {
    const k = abs / 1000;
    return `${sign}₹${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)} k`;
  }
  return `${sign}₹${abs}`;
}
