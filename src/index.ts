export type Counts = ReadonlyMap<string, number>;
export function countItems(items: readonly string[]): Map<string, number> {
  if (!Array.isArray(items) || items.some((x) => typeof x !== 'string'))
    throw new TypeError('Expected string items');
  const counts = new Map<string, number>();
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return counts;
}
export function subtractCounts(left: Counts, right: Counts): Map<string, number> {
  const out = new Map<string, number>();
  for (const [key, count] of left) {
    if (!Number.isSafeInteger(count) || count < 0) throw new RangeError('Invalid count');
    const remaining = count - (right.get(key) ?? 0);
    if (remaining > 0) out.set(key, remaining);
  }
  return out;
}
export function containsCounts(container: Counts, required: Counts): boolean {
  for (const [key, count] of required) if ((container.get(key) ?? 0) < count) return false;
  return true;
}
