import '@styles/SurveyComponents.styles.scss'
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
/**
 * FormInputNumber is a form input component for numeric values that enforces optional min and max
 * constraints and integrates with react-hook-form for form state and validation.
 */
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
