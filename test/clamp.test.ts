import { expect, test } from 'vitest'
import { clamp } from '../src/index'

test('clamp', () => {
  expect(clamp(20, 10, 15)).toStrictEqual(15)
  expect(clamp(8, 10, 15)).toStrictEqual(10)
  expect(clamp(20, 10, 20)).toStrictEqual(20)

  expect(clamp(20, 15, 10)).toStrictEqual(15)
  expect(clamp(8, 15, 10)).toStrictEqual(10)
  expect(clamp(20, 20, 10)).toStrictEqual(20)

  expect(clamp(10, 20)).toStrictEqual(10)
  expect(clamp(21, 20)).toStrictEqual(20)

  expect(clamp(-10, 10)).toStrictEqual(-10)
  expect(clamp(0, 10)).toStrictEqual(0)

  expect(clamp(0.999, 1)).toStrictEqual(0.999)
  expect(clamp(1.001, 1)).toStrictEqual(1)

  expect(clamp(1, 1)).toStrictEqual(1)
  expect(clamp(1, 1)).toStrictEqual(1)

  // https://github.com/lodash/lodash/blob/main/test/clamp.spec.js

  expect(clamp(5, 3)).toStrictEqual(3)
  expect(clamp(1, 3)).toStrictEqual(1)

  expect(clamp(-10, -5, 5)).toStrictEqual(-5)
  expect(clamp(-10.2, -5.5, 5.5)).toStrictEqual(-5.5)
  expect(clamp(-Infinity, -5, 5)).toStrictEqual(-5)

  expect(clamp(10, -5, 5)).toStrictEqual(5)
  expect(clamp(10.6, -5.6, 5.4)).toStrictEqual(5.4)
  expect(clamp(Infinity, -5, 5)).toStrictEqual(5)

  expect(clamp(-4, -5, 5)).toStrictEqual(-4)
  expect(clamp(-5, -5, 5)).toStrictEqual(-5)
  expect(clamp(-5.5, -5.6, 5.6)).toStrictEqual(-5.5)

  expect(clamp(4, -5, 5)).toStrictEqual(4)
  expect(clamp(5, -5, 5)).toStrictEqual(5)
  expect(clamp(4.5, -5.1, 5.2)).toStrictEqual(4.5)

  expect(1 / clamp(0, -5, 5)).toStrictEqual(Infinity)
  expect(1 / clamp(-10, 0, 5)).toStrictEqual(Infinity)
  expect(1 / clamp(-0, -5, 5)).toStrictEqual(-Infinity)
  expect(1 / clamp(-10, -0, 5)).toStrictEqual(-Infinity)
})
