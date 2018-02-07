/** this function works
 * 与えられた配列の中から合致、もしくは、一番近しい値を探索する二分探索
 * 値の重複しているものに合致した場合は、一番若いインデックスまで遡る
*/

const getRoughPos = (array: any, target: any) => {
  let head = 0
  let tail = array.length

  while (head <= tail) {
    // console.log(`head: ${head}, tail: ${tail}`)
    const center = Math.floor((head + tail) / 2)
    const val = array[center].id

    if (val < target) {
      head = center + 1
    } else if (val > target) {
      tail = center - 1
    }

    return center
  }
  // console.log(`val: ${array[tail]}`)
  return tail < 0 ? 0 : tail
}

const search = (array: any, target: any) => {
  let pos = getRoughPos(array, target)

  if (pos !== 0) {
    while (array[pos] === array[pos - 1]) {
      console.log(pos)
      pos -= 1
    }
  }

  return pos
}
