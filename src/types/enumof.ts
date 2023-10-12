/**
 * Enums considered harmful.
 *
 * You can use this approach instead -
 *
 * @example
 *
 * ```ts
 * const LOG_LEVEL = {
 *   DEBUG: 'DEBUG',
 *   WARNING: 'WARNING',
 *   ERROR: 'ERROR',
 * } as const satisfies EnumOf<string>
 * ```
 *
 * @see https://www.youtube.com/watch?v=jjMbPt_H3RQ
 */
export type EnumOf<T extends string | number = string | number> = Record<
  string,
  T
>
