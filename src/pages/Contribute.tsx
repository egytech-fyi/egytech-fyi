import {
  BaseComment,
  EngineeringActivities,
  EngineeringSkills,
  GeneralQuestions,
  ManagementActivities,
  ProductActivities,
  SalaryQuestions,
  SatisfactionQuestions,
} from '@components'

import '@styles/Contribute.styles.scss'
import { Col, Divider, Progress, Steps } from 'antd'
import { useState } from 'react'
import { FieldErrors, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

export function Contribute() {
  const [currentStep, setCurrentStep] = useState(0)
  const [historyStack, setHistoryStack] = useState<number[]>([])
  const methods = useForm<FieldValues>({ mode: 'all' })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('submit:', data)
  }

  function scrollToFirstError(errors: FieldErrors) {
    // scroll to first error
    const elements = Object.keys(errors)
      .map((name) => document.getElementsByName(name)[0])
      .filter((el) => !!el)
    elements[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  async function onNext(stepNum: number) {
    await methods.trigger() // validate form values
    const isValid = Object.keys(methods.formState.errors).length == 0
    if (isValid) {
      // navigate to next page after saving current page to HistoryStack
      setHistoryStack((prev) => [...prev, currentStep])
      setCurrentStep(stepNum)
    } else {
      scrollToFirstError(methods.formState.errors)
    }
  }
  function onBack() {
    // Navigate to last page and remove it from the stack
    setCurrentStep(historyStack[historyStack.length - 1])
    setHistoryStack(historyStack.slice(0, -1))
  }

  const formPages = [
    { name: 'Personal Info', component: GeneralQuestions },
    { name: 'Engineering Skills', component: EngineeringSkills },
    { name: 'Engineering Activities', component: EngineeringActivities },
    { name: 'Product Activities', component: ProductActivities },
    { name: 'Management Activities', component: ManagementActivities },
    { name: 'Salary', component: SalaryQuestions },
    { name: 'Satisfaction', component: SatisfactionQuestions },
  ]
  const CurrentPage = formPages[currentStep].component
  return (
    <Col xs={24} md={16} lg={12}>
      <h1 className='header-text'>Survey</h1>
      <div className='comment-container'>
        <BaseComment>
          This survey is designed to gather valuable insights from you in the most efficient way
          possible. By keeping the number of questions concise, we can ensure the survey takes
          approximately 12 minutes to complete.{' '}
          <strong>Some sections may be skipped depending on your job role</strong> Your
          participation and willingness to help others in the Egyptian tech market are greatly
          appreciated.
        </BaseComment>
      </div>
      <Divider />

      <Steps
        className='survey-steps'
        current={currentStep}
        items={formPages.map(() => {
          // to create steps without any text
          return {
            title: '',
          }
        })}
        progressDot
      />
      <Progress
        className='survey-percentage'
        type='circle'
        percent={Math.ceil((currentStep / formPages.length) * 100)}
        trailColor='rgba(0, 0, 0, 0.06)'
        steps={formPages.length}
        showInfo={false}
      />
      <FormProvider {...methods}>
        <form name='survey' onSubmit={methods.handleSubmit(onSubmit)}>
          <CurrentPage next={onNext} back={onBack} />
        </form>
      </FormProvider>
    </Col>
  )
}
