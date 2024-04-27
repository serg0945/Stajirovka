const filterArr = require('./filterArr')

describe('sum function', () => {
  test('Элементы - числа', () => {
    expect(filterArr(1, 2, 3)).toEqual([1, 2, 3])
  })

  test('Элементы - не числа', () => {
    expect(filterArr('1', '1', '1')).not.toEqual([1, 2, 3])
  })

  test('2 есть в массиве', () => {
    expect(filterArr(1, 2, 3)).toContain(2)
  })

  //   test("Не числа", () => {
  //     expect(sum("0", "0")).toBe(0);
  //   });
})
