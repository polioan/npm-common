export function isValidDate(date: Date) {
  return !isNaN(date.getTime())
}
