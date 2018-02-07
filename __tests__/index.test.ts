import search from '../index'

const init = () => {
  const array = []
  const MAX = 1000000
  for (let i = 0; i < MAX; i += 1) {
    array.push({ id: i + Date.now(), idx: i })
  }
  // const array = [10, 10, 10, 10, 11, 11, 11, 12, 13, 16, 19, 21, 24, 25, 30, 35]
  return array
}

describe('test', () => {
  it('no error', () => {
    console.log('start')
  })
})
