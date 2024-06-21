import '@styles/SurveyComponents.styles.scss'
import { Form, Input } from 'antd'
import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
interface PropTypes {
  name: string
  label: string
  isRequired: boolean
}
/**
 * FormInput is a form input component for text values that integrates with
 * react-hook-form to manage form state and validation, supporting a required field option.
 */

export function FormInput({ name, label, isRequired }: PropTypes) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
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
