import '@styles/SurveyComponents.styles.scss'
import { Form, Radio, Select } from 'antd'
import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface PropTypes {
  name: string
  label: string
  isRequired: boolean
  options: string[]
  isMultipleChoices: boolean
}
const { Option } = Select
export function FormSelect({ name, label, options, isRequired, isMultipleChoices }: PropTypes) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired && 'This question is required!' }}
      render={({ field }) => (
        <Form.Item
          validateStatus={errors[name] ? 'error' : ''}
          required={isRequired}
          label={label}
          hasFeedback
          layout='vertical'
          style={{ textAlign: 'left' }}>
          {options.length > 3 && (
            <Select
              {...field}
              mode={isMultipleChoices ? 'multiple' : undefined}
              {...field}
              placeholder=''>
              {options.map((option, i) => (
                <Option value={option} key={i}>
                  {option}
                </Option>
              ))}
            </Select>
          )}
          {options.length <= 3 && !isMultipleChoices && (
            <Radio.Group {...field}>
              {options.map((option, i) => (
                <Radio value={option} key={i}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          )}
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
