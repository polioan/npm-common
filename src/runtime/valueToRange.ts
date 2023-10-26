/**
 * Or "map".
 *
 * @example
 *
 * ```ts
 * const result = valueToRange(50, 0, 100, 0, 1) // 0.5
 * ```
 */
export function valueToRange(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}
