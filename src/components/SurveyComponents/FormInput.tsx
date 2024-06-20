import { Form, Input } from 'antd'
import { ReactNode } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

interface PropTypes {
  name: string
  label: string
  isRequired: boolean
  control: Control
  errors: FieldErrors
}
export function FormInput({ name, label, control, isRequired, errors }: PropTypes) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: isRequired, message: 'This question is required!' },
      }}
      render={({ field }) => (
        <Form.Item
          validateStatus={errors[name] ? 'error' : ''}
          required={isRequired}
          label={label}
          hasFeedback
          layout='vertical'
          style={{ textAlign: 'left' }}>
          <Input {...field} />
          {errors[name] && (
            <p className='field-alert' role='alert'>
              {errors[name]?.message as ReactNode}
            </p>
          )}
        </Form.Item>
      )}
    />
  )
}
