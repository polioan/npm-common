type IsUnionInternal<T, U = T> = [T] extends [never]
  ? false
  : T extends never
  ? false
  : [U] extends [T]
  ? false
  : true

export type IsUnion<T> = IsUnionInternal<T>
