export function isValidPort(payload: unknown): payload is number {
  return (
    typeof payload === 'number' &&
    !isNaN(payload) &&
    payload > 0 &&
    payload < 65536
  )
}
