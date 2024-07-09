import { FormItem } from '@components'
import '@styles/SurveyComponents.styles.scss'
import { InputNumber } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

interface propTypes {
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
export function FormInputNumber({ name, label, isRequired, min, max }: propTypes) {
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
        <FormItem error={errors[name]?.message?.toString()} isRequired={isRequired} label={label}>
          <InputNumber {...field} />
        </FormItem>
      )}
    />
  )
}
