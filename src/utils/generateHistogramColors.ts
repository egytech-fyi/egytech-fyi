export const generateHistogramColors = (length: number, index: number) => {
  const array = Array(length).fill('#21302c')
  const midpoint = length / 2
  if (index >= 0) {
    array[index] = index < midpoint ? '#7fc7b5' : '#1b7f6b'
  }
  return array
}
