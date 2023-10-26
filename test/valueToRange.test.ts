import { test, expect } from 'vitest'
import { valueToRange } from '../src/index'

test('valueToRange', () => {
  expect(valueToRange(50, 0, 100, 0, 1)).toStrictEqual(0.5)
  expect(valueToRange(50, 0, 100, 1, 0)).toStrictEqual(0.5)
  expect(valueToRange(50, 100, 0, 1, 0)).toStrictEqual(0.5)
})
