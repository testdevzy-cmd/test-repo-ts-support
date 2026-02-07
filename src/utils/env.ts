/**
 * Checks if the application is running in development mode
 * @returns true if in development, false otherwise
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}
