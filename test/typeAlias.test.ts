import { test } from 'vitest'
import type { TypeAlias } from '../src/index'

test('TypeAlias', () => {
  type Dollar = TypeAlias<number, { readonly 0: unique symbol }[0]>

  type Yen = TypeAlias<number, { readonly 0: unique symbol }[0]>

  let numberValue = 3
  let dollarValue = 3 as Dollar
  let yenValue = 3 as Yen

  // @ts-expect-error
  numberValue = dollarValue
  // @ts-expect-error
  dollarValue = numberValue
  // @ts-expect-error
  dollarValue = yenValue
  // @ts-expect-error
  yenValue = dollarValue

  function takesNumber(n: number) {
    void n
  }

  function takesDollar(n: Dollar) {
    void n
  }

  takesNumber(numberValue)
  // @ts-expect-error
  takesNumber(dollarValue)

  takesDollar(dollarValue)
  // @ts-expect-error
  takesDollar(numberValue)
  // @ts-expect-error
  takesDollar(yenValue)
})
