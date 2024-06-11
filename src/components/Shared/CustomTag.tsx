import { Tag, TagProps } from 'antd'
import '@styles/SharedComponents.styles.scss'

interface CustomTagProps extends TagProps {
  fieldKey: string
  fieldValue: string | number | boolean | string[]
}

export const CustomTag = ({ closable, onClose, fieldKey, color, fieldValue }: CustomTagProps) => {
  const formattedTagValue = typeof fieldValue === 'boolean' ? '' : `: ${fieldValue}`
  return (
    <Tag closable={closable} onClose={onClose} className='custom-tag' color={color}>
      {`${fieldKey}${formattedTagValue}`}
    </Tag>
  )
}
