import { ReactNode } from 'react'

interface PropTypes {
  children: ReactNode
  label: string
  isRequired: boolean
  error: string | undefined
}
export function FormItem({ children, error, label, isRequired }: PropTypes) {
  return (
    <div className='form-item'>
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
