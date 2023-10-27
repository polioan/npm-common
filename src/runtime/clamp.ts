export function clamp(number: number, upper: number): number
export function clamp(number: number, lower: number, upper: number): number
export function clamp(number: number, lower: number, upper?: number): number {
  if (typeof upper === 'undefined') {
    if (number > lower) {
      return lower
    }
    return number
  } else {
    if (lower > upper) {
      ;[lower, upper] = [upper, lower]
    }
    return Math.min(Math.max(number, lower), upper)
  }
}
