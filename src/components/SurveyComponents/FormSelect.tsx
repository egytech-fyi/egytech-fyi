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
/**
 *  FormSelect is a form input component that renders either a Select dropdown or a
 *  Radio group based on the number of options and allows for single or multiple selections.
 *  It integrates with react-hook-form for form state and validation management.
 */
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
