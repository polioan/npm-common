export function randomChoice<T>(arr: T[]): T | undefined {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
