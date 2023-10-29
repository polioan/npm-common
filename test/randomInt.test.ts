import { expect, test } from 'vitest'
import { randomInt } from '../src/index'

test('randomInt', () => {
  for (let i = 0; i < 5000; i++) {
    {
      const value = randomInt(10)
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThanOrEqual(10)
    }
    {
      const value = randomInt(5, 10)
      expect(value).toBeGreaterThanOrEqual(5)
      expect(value).toBeLessThanOrEqual(10)
    }
    {
      const value = randomInt(5.5, 10.5)
      expect(value).toBeGreaterThanOrEqual(5)
      expect(value).toBeLessThanOrEqual(10)
    }
  }
})
