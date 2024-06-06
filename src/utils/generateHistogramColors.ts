export const generateHistogramColors = (length: number, index: number) => {
  const array = Array(length).fill('#36454F')
  const midpoint = length / 2
  if (index >= 0) {
    array[index] = index < midpoint ? '#6ec4a6' : '#50C878'
  }
  return array
}
