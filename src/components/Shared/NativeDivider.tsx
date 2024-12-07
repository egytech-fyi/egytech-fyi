import React from 'react'
import '@styles/SharedComponents.styles.scss'

interface DividerProps {
  classNames?: string
}

export const NativeDivider: React.FC<DividerProps> = ({ classNames = '' }, ...props) => {
  return <hr className={`divider ${classNames}`} {...props} />
}
