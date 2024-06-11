type TransformedMap = Map<string, number>
type DataItem = [string, number]

function transformDataItemIntoMap(data: DataItem[]): TransformedMap {
  const map: TransformedMap = new Map()
  data.forEach((item, index) => {
    map.set(item[0], index)
  })
  return map
}
function transformMapIntoArray(map: TransformedMap): string[] {
  return Array.from(map.keys())
}

export function getCategories(data: DataItem[]): {
  categoriesMap: TransformedMap
  categoriesArray: string[]
} {
  const categoriesMap = transformDataItemIntoMap(data)
  const categoriesArray = transformMapIntoArray(categoriesMap)
  return { categoriesMap, categoriesArray }
}
