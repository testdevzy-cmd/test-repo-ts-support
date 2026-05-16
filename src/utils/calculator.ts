export function divide(a: number, b: number): number {
  return a / b;
}

export function multiply(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}
