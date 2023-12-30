export function arrayify<const T>(
  payload: T
): T extends readonly any[] ? T : [T] {
  // @ts-expect-error
  return Array.isArray(payload) ? payload : [payload]
}
