export function displayDate(date: Date | string): string {
  return new Date(date).toLocaleDateString();
}