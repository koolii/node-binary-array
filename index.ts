/** this function works
 * 与えられた配列の中から合致、もしくは、一番近しい値を探索する二分探索
 * 値の重複しているものに合致した場合は、一番若いインデックスまで遡る
*/

const getRoughPos = (array: any, target: any) => {
  let head = 0
  let tail = array.length - 1

  while (head <= tail) {
    const center = Math.floor((head + tail) / 2)
    const val = array[center]

    if (val < target) {
      head = center + 1
      continue
    } else if (val > target) {
      tail = center - 1
      continue
    }

    return center
  }
  return head < 0 ? 0 : head
}

const search = (array: any, target: any) => {
  let pos = getRoughPos(array, target)

  while (pos !== 0 && array[pos] === array[pos - 1]) {
    pos -= 1
  }

  return pos
}

export default search
