/**
 * Formats a date to a readable string
 * @param date - The date to format (defaults to current date)
 * @returns Formatted date string (e.g., "January 1, 2024 at 12:00 PM")
 */
export function formatTimestamp(date: Date = new Date()): string {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
