import { FormInput, FormInputNumber, FormSelect, Navigation } from '@components'
import { QUESTION_TYPE } from '@constants'
import { SurveyStepType } from '@types'
import { scrollToRef } from '@utils'
import { useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

// TODO: clear fields after current page because if user goes general => product => general => engineering the answers for product would still be filled.
// TODO: Either EGP or foreign currency is required not both
interface SurveyStepProps {
  next: (step: number) => void
  back: () => void
  surveyData: SurveyStepType
  last: boolean
}

export function SurveyStep({ surveyData, next, back, last }: SurveyStepProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const { watch } = useFormContext()
  const step = surveyData
  const role = watch('role', '')
  useEffect(() => {
    scrollToRef(titleRef.current)
  }, [])
  return (
    <div className='survey-step'>
      <h2 className='header-subtext' ref={titleRef}>
        {step.title}
      </h2>
      {step.questions.map((question, key) => {
        switch (question.type) {
          case QUESTION_TYPE.STRING:
            return (
              <FormInput
                key={surveyData.internalName + key}
                name={question.name}
                label={question.label}
                isRequired={question.isRequired}
              />
            )
          case QUESTION_TYPE.NUMBER:
            return (
              <FormInputNumber
                key={surveyData.internalName + key}
                name={question.name}
                label={question.label}
                isRequired={question.isRequired}
                validationOptions={question.validationRules}
              />
            )
          case QUESTION_TYPE.CHECKBOX:
            return (
              <FormSelect
                key={surveyData.internalName + key}
                name={question.name}
                label={question.label}
                isRequired={question.isRequired}
                options={question.choices!}
                isMultipleChoices={true}
              />
            )
          case QUESTION_TYPE.MCQ:
            return (
              <FormSelect
                key={surveyData.internalName + key}
                name={question.name}
                label={question.label}
                isRequired={question.isRequired}
                options={question.choices!}
                isMultipleChoices={false}
              />
            )
        }
      })}

      <Navigation
        onNext={
          step.next
            ? () => next?.(typeof step.next === 'number' ? step.next : step.next!(role))
            : undefined
        }
        onBack={step.back ? back : undefined}
        submit={last}
      />
    </div>
  )
}
