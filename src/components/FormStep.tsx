import '@styles/FormStep.styles.scss'
import { Question, QuestionType, SectionType } from '@types'
import { Checkbox, Col, Form, Input, InputNumber, Radio } from 'antd'
import { ReactElement, ReactNode, useEffect, useRef } from 'react'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm,
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
            return (
              <Col span={12}>
                <Radio key={i} value={choice} style={{ minWidth: '10rem' }}>
                  {choice}
                </Radio>
              </Col>
            )
          })}
        </Radio.Group>
      )
    case QuestionType.CHECKBOX:
      return (
        <Checkbox.Group {...field}>
          {question.choices?.map((choice, i) => {
            return (
              <Col span={12}>
                <Checkbox key={i} value={choice}>
                  {choice}
                </Checkbox>
              </Col>
            )
          })}
        </Checkbox.Group>
      )
    case QuestionType.URL:
      return <Input type='URL' {...field} />
  }
}

interface FormStepProps {
  section: SectionType
  currentStep: number
  setCurrentStep: (num: number) => void
  numSteps: number
}
// A single step in a multi-step form
export function FormStep({ section, currentStep, setCurrentStep }: FormStepProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('submit:', data)
    setCurrentStep(currentStep + 1)
  }
  useEffect(() => {
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  useEffect(() => {
    {
      // scroll to first error
      const elements = Object.keys(errors)
        .map((name) => document.getElementsByName(name)[0])
        .filter((el) => !!el)
      elements[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [errors])

  return (
    <form name='survey' onSubmit={handleSubmit(onSubmit)} style={{ width: '70%' }}>
      <h2 ref={titleRef}>{section.title}</h2>
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
                  style={{ textAlign: 'left', minHeight: '80px' }}>
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
      {/* <Navigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        numSteps={numSteps}
        onNext={() => {}}
        onBack={() => setCurrentStep(currentStep - 1)}
      /> */}
    </form>
  )
}
