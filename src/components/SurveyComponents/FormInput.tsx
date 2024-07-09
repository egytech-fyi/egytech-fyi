import { FormItem } from '@components'
import '@styles/SurveyComponents.styles.scss'
import { Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

interface propTypes {
  name: string
  label: string
  isRequired: boolean
}
/**
 * FormInput is a form input component for text values that integrates with
 * react-hook-form to manage form state and validation, supporting a required field option.
 */

export function FormInput({ name, label, isRequired }: propTypes) {
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
        <FormItem error={errors[name]?.message?.toString()} isRequired={isRequired} label={label}>
          <Input {...field} />
        </FormItem>
      )}
    />
  )
}
