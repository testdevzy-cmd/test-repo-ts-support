/**
 * Validates if a string is not empty
 * @param value - The string to validate
 * @returns true if the string is not empty, false otherwise
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  return value.trim().length > 0;
}

/**
 * Validates if a string is a valid email format
 * @param email - The email string to validate
 * @returns true if the email format is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
