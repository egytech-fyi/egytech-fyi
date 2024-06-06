import { DefaultOptionType } from 'antd/es/select'

export function transformOptions(obj: Record<string, string>): DefaultOptionType[] {
  return Object.keys(obj).map((key: string) => {
    return {
      title: obj[key],
      value: key,
      label: obj[key],
    }
  })
}
