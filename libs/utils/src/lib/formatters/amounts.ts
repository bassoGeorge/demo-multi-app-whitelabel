const DollarFormat = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
});

const DollarAndCentsFormat = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
});

export const toNumber = (value: number | string): number =>
  typeof value === 'number' ? value : parseFloat(value);
export const toDollars = (value: number | string): string =>
  DollarFormat.format(toNumber(value));
export const toDollarsAndCents = (value: number | string): string =>
  DollarAndCentsFormat.format(toNumber(value));
