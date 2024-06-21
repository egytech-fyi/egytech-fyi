import { Form, InputNumber } from 'antd'
import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface PropTypes {
  name: string
  label: string
  isRequired: boolean
  min?: number
  max?: number
}
export function FormInputNumber({ name, label, isRequired, min, max }: PropTypes) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired && 'This question is required!',
        min: { value: min ?? 0, message: `The min value is ${min ?? 0}` },
        max: { value: max ?? Infinity, message: `The max value is ${max ?? Infinity}` },
      }}
      render={({ field }) => (
        <Form.Item
          validateStatus={errors[name] ? 'error' : ''}
          required={isRequired}
          label={label}
          hasFeedback
          layout='vertical'
          style={{ textAlign: 'left' }}>
          <InputNumber {...field} />
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
