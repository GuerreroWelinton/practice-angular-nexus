export function calculateDiscountedPrice(price: number, discountPercentage?: number): number {
  if (!discountPercentage) return 0;
  return +(price - (price * discountPercentage) / 100);
}
