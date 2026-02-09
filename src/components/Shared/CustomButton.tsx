import { Button, ButtonProps } from 'antd'
import { ReactNode } from 'react'
import '@styles/SharedComponents.styles.scss'

interface CustomButtonProps extends ButtonProps {
  onClick?: () => void
  children?: ReactNode
}
export const CustomButton = ({ onClick, children, className, ...rest }: CustomButtonProps) => {
  return (
    <Button className={['button', className].filter(Boolean).join(' ')} onClick={onClick} {...rest}>
      {children}
    </Button>
  )
}
