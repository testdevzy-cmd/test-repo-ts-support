import packageJson from "../../package.json";

/**
 * Gets the current application version from package.json
 * @returns The version string (e.g., "0.1.0")
 */
export function getAppVersion(): string {
  return packageJson.version;
}
