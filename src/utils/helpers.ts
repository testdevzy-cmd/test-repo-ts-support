export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0) / items.length;
}

export function getItemById(items: Array<{ id: number }>, id: number) {
  return items.find((item) => item.id === id);
}
