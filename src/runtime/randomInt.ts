export function randomInt(max: number): number
export function randomInt(min: number, max: number): number
export function randomInt(min: number, max?: number): number {
  if (typeof max === 'undefined') {
    max = min
    min = 0
  }
  min = Math.ceil(min)
  max = Math.floor(max)
  return min + Math.floor(Math.random() * (max - min + 1))
}
