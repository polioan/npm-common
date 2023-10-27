import { test } from 'vitest'
import type { Class, AnyClass } from '../src/index'

test('Class, AnyClass', () => {
  function takesClass<T extends AnyClass>(fnClass: T) {
    void fnClass
  }

  class Dog1 {}

  class Dog2 {
    constructor(public readonly bark: string) {}
  }

  takesClass(class {})
  takesClass(Dog1)
  takesClass(Date)
  // @ts-expect-error
  takesClass(new Dog1())
  // @ts-expect-error
  takesClass(new Date())

  function create<T, U extends readonly unknown[]>(
    fnClass: Class<T, U>,
    params: U
  ) {
    return new fnClass(...params)
  }

  const date = create(Date, [''])
  const dog1 = create(Dog1, [])
  const dog2 = create(Dog2, ['bark'])

  void { date, dog1, dog2 }
})
