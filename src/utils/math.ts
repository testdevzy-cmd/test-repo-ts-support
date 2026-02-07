/**
 * Calculates the average of an array of numbers
 * @param numbers - Array of numbers to average
 * @returns The average value
 */
export function calculateAverage(numbers: number[]): number {
  // Bug: No null/empty array check - will cause division by zero
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

/**
 * Safely divides two numbers
 * @param a - Numerator
 * @param b - Denominator
 * @returns The result of division
 */
export function divide(a: number, b: number): number {
  // Bug: Missing validation - allows division by zero
  return a / b;
}
