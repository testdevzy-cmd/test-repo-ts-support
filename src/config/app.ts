/**
 * Application configuration
 */
export const appConfig = {
  name: "test-repo-ts-support",
  version: "0.1.0",
  environment: process.env.NODE_ENV || "development",
} as const;

/**
 * Gets the application name
 * @returns The application name
 */
export function getAppName(): string {
  return appConfig.name;
}
