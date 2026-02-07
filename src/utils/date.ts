/**
 * Formats a date to a readable string format
 * @param date - The date to format (defaults to current date)
 * @returns Formatted date string (e.g., "January 1, 2024")
 */
export function formatDate(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
