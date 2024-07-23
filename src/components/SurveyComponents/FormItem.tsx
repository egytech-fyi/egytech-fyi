import { ReactNode } from 'react'

interface FormItemProps {
  children: ReactNode
  label: string
  isRequired: boolean
  error: string | undefined
  id?: string
}
export function FormItem({ children, error, label, isRequired, id }: FormItemProps) {
  return (
    <div className='form-item' id={id}>
      <span>
        {label} <span className='field-alert'>{isRequired && '*'}</span>
      </span>
      {children}
      <div className='error-container'>
        {error && (
          <p className='field-alert' role='alert'>
            {error as ReactNode}
          </p>
        )}
      </div>
    </div>
  )
}
