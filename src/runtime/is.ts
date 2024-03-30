import type { z } from 'zod'

export function is<T extends z.ZodSchema>(
  schema: T,
  value: unknown
): value is z.infer<T> {
  return schema.safeParse(value).success
}
