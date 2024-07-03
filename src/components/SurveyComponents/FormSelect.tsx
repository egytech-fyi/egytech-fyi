import { FormItem } from '@components'
import '@styles/SurveyComponents.styles.scss'
import { useFormContext } from 'react-hook-form'

interface PropTypes {
  name: string
  label: string
  isRequired: boolean
  options: string[]
  isMultipleChoices: boolean
}

/**
 *  FormSelect is a form input component that renders either a Select dropdown or a
 *  Radio group based on the number of options and allows for single or multiple selections.
 *  It integrates with react-hook-form for form state and validation management.
 */
export function FormSelect({ name, label, options, isRequired, isMultipleChoices }: PropTypes) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <FormItem
      error={errors[name]?.message?.toString()}
      isRequired={isRequired}
      label={label}
      id={name}>
      {
        <div className='radio-group'>
          {options.map((option, i) => (
            <div key={i} className='radio-choice'>
              <input
                type={isMultipleChoices ? 'checkbox' : 'radio'}
                {...register(name, {
                  required: { value: isRequired, message: 'This question is required!' },
                })}
                id={`${name}-${i}`}
                className='radio-input'
                value={option}
              />
              <label className='radio-label' htmlFor={`${name}-${i}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      }
    </FormItem>
  )
}