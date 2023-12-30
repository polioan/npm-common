import { expect, test } from 'vitest'
import { arrayify } from '../src/index'

test('arrayify', () => {
  // @ts-expect-error
  expect(arrayify()).toStrictEqual([undefined])
  expect(arrayify(undefined)).toStrictEqual([undefined])

  expect(arrayify([])).toStrictEqual([])
  expect(arrayify([undefined])).toStrictEqual([undefined])

  expect(arrayify(1)).toStrictEqual([1])
  expect(arrayify([1])).toStrictEqual([1])

  function getArray() {
    return [1, 2, 3]
  }

  expect(arrayify(getArray())).toStrictEqual([1, 2, 3])

  function getNumber() {
    return 3
  }

  expect(arrayify(getNumber())).toStrictEqual([3])
})
