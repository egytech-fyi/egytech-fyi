import '@styles/FormStep.styles.scss'
import { Question, QuestionType, SectionType } from '@types'
import { Checkbox, Form, Input, InputNumber, Radio } from 'antd'
import { ReactElement, ReactNode } from 'react'
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from 'react-hook-form'

function getInputField(
  question: Question,
  field: ControllerRenderProps<FieldValues, string>,
): ReactElement {
  switch (question.type) {
    case QuestionType.STRING:
      return <Input {...field} />
    case QuestionType.NUMBER:
      return <InputNumber {...field} />
    case QuestionType.MCQ:
      return (
        <Radio.Group {...field}>
          {question.choices?.map((choice, i) => {
            // if (choice.startsWith('Other:')) return <Input key={i} placeholder='Other' />
            return (
              <Radio key={i} value={choice}>
                {choice}
              </Radio>
            )
          })}
        </Radio.Group>
      )
    case QuestionType.CHECKBOX:
      return <Checkbox.Group options={question.choices} {...field} />
    case QuestionType.URL:
      return <Input type='URL' {...field} />
  }
}

interface FormStepProps {
  section: SectionType
  control: Control<FieldValues>
  errors: FieldErrors<FieldValues>
}
// A single step in a multi-step form
export function FormStep({ section, control, errors }: FormStepProps) {
  return (
    <div>
      <h2>{section.title}</h2>
      {section.questions.map((value, i) => {
        const fieldName = `${section.title.replace(' ', '_').replace(/[()]/g, '')}_${i}`
        const question = value as Question
        return (
          <div className='survey-question' key={i}>
            <Controller
              name={fieldName}
              control={control}
              rules={{ required: question.isRequired && 'This question is required!' }}
              render={({ field }) => (
                <Form.Item
                  validateStatus={errors[fieldName] ? 'error' : ''}
                  required={question.isRequired}
                  label={question.question}
                  hasFeedback
                  layout='vertical'
                  style={{ textAlign: 'left' }}>
                  {getInputField(question, field)}
                  {errors[fieldName] && (
                    <p className='field-alert' role='alert'>
                      {errors[fieldName]?.message as ReactNode}
                    </p>
                  )}
                </Form.Item>
              )}
            />
          </div>
        )
      })}
    </div>
  )
}
