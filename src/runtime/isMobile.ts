/**
 * Checks whether the client is mobile via navigator.
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  try {
    // @ts-expect-error npm i -D user-agent-data-types
    if (navigator['userAgentData']?.mobile == null) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      )
    }
    // @ts-expect-error npm i -D user-agent-data-types
    return navigator['userAgentData'].mobile
  } catch {
    return false
  }
}
