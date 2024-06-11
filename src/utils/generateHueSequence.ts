/**
 * @function
 * @param numZones: number of delivery zones
 * @returns getDeliveryZoneColor function
 */
export function generateHueSequence(numZones: number) {
  const hueZones = 3
  const step = numZones / hueZones
  const hueSequence: number[] = []

  for (let stepCounter = 0; stepCounter < step; stepCounter++) {
    for (let hueZoneCounter = 0; hueZoneCounter < hueZones; hueZoneCounter++) {
      const hue = (hueZoneCounter * step + stepCounter) * (360 / hueZones / step)
      hueSequence.push(Math.floor(hue))
    }
  }

  return {
    getColor: function getDeliveryZoneColor(index: number) {
      return `hsl(${hueSequence[index]}, 100%, 50%)`
    },
    hueSequence: hueSequence.map((item) => `hsl(${item}, 100%, 50%)`),
  }
}
