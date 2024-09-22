import React, { ReactNode } from 'react'
import '@styles/SharedComponents.styles.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const NativeButton: React.FC<ButtonProps> = ({
  children,

  className,
  ...props
}) => {
  return (
    <button className={`button-basic ${className}`} {...props}>
      {children}
    </button>
  )
}
