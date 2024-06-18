import { BaseComment, FormStep, Navigation } from '@components'
import { getSurvey } from '@services'
import { SurveyType } from '@types'
import type { StepProps } from 'antd'
import { Divider, Steps } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export function Contribute() {
  const [survey, setSurvey] = useState<SurveyType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<StepProps[]>([])
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    trigger,
  } = useForm<FieldValues>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('submit:', data)
    axios.post('http://localhost:8787' + '/survey', data).catch((error) => console.log(error))
  }

  useEffect(() => {
    // fetch latest survey from api
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const fetchedQuestions = await getSurvey()
        setSurvey(fetchedQuestions)
        setSteps(
          fetchedQuestions.sections.map((section, i) => {
            return { key: i } as StepProps
          }),
        )
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div
      className='main-container'
      style={{
        width: '80%',
        marginBottom: '10px',
        marginTop: '20px',
      }}>
      <h1 className='header-text'>Survey</h1>
      <BaseComment>
        This survey is designed to gather valuable insights from you in the most efficient way
        possible. By keeping the number of questions concise, we can ensure the survey takes
        approximately 12 minutes to complete.{' '}
        <strong>Some sections may be skipped depending on your job role</strong>. Your participation
        and willingness to help others in the Egyptian tech market are greatly appreciated.
      </BaseComment>
      <Divider />
      <Steps
        direction='horizontal'
        current={currentStep}
        items={steps}
        responsive={false}
        progressDot
      />
      {!isLoading && !error && (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form name='survey' onSubmit={handleSubmit(onSubmit)} style={{ width: '80%' }}>
          {survey?.sections.map((section, i) => {
            // render each survey section
            return (
              currentStep == i && (
                <FormStep errors={errors} control={control} section={section} key={i} />
              )
            )
          })}

          <Navigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isLast={currentStep == steps.length - 1}
            isFormValid={isValid}
            trigger={trigger}
          />
        </form>
      )}
      {error && (
        <div>
          <strong>Failed to fetch survey 😔 </strong>
          <br /> please try again later
        </div>
      )}
    </div>
  )
}
