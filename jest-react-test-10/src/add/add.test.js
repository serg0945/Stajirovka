const sum = require('./add')

describe('sum function', () => {
  //beforeAll(() => {}) // Срабатывает один раз перед тестами
  //beforeEach(() => {}) // Срабатывает каждый раз перед тестами
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('Не числа', () => {
    expect(sum('0', '0')).not.toBe(0)
  })
  //afterAll(() => {}) // Срабатывает один раз перед тестами
  //afterEach(() => {}) // Срабатывает каждый раз перед тестами
})
