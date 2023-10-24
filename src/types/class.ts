export type Class<T, U extends readonly unknown[]> = {
  prototype: T
  new (...args: U): T
}

export type AnyClass = Class<any, any[]>
