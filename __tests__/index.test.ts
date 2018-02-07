import search from '../index'

describe('test', () => {
  it('it returns index that target equals value in array', () => {
    const array = [10, 10, 10, 11, 11, 12, 12, 12, 13, 16, 19, 21, 24, 25, 30, 35]
    expect(search(array, 21)).toBe(11)
  })

  it('7 is really value matched target, but when it has a few same value in array, matched index will roll up.', () => {
    const array = [10, 10, 10, 11, 11, 12, 12, 12, 13, 16, 19, 21, 24, 25, 30, 35]
    expect(search(array, 12)).toBe(5)
  })

  it(`it returns what gets next value's index of target, if target doesn't match anything.`, () => {
    const array = [10, 10, 10, 11, 11, 12, 12, 12, 13, 16, 19, 21, 24, 25, 30, 35]
    expect(search(array, 22)).toBe(12)
  })
})
