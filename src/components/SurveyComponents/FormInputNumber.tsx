import { FormItem } from '@components'
import '@styles/SurveyComponents.styles.scss'
import { InputNumber } from 'antd'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'

interface FormInputNumberProps {
  name: string
  label: string
  isRequired: boolean
  validationOptions?: RegisterOptions
}
/**
 * FormInputNumber is a form input component for numeric values that enforces optional min and max
 * constraints and integrates with react-hook-form for form state and validation.
 */
export function FormInputNumber({
  name,
  label,
  isRequired,
  validationOptions,
}: FormInputNumberProps) {
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
        ...(validationOptions ?? {}),
      }}
      render={({ field }) => (
        <FormItem error={errors[name]?.message?.toString()} isRequired={isRequired} label={label}>
          <InputNumber {...field} />
        </FormItem>
      )}
    />
  )
}
