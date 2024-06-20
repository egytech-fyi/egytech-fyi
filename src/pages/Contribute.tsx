import { BaseComment, GeneralQuestions } from '@components'

import '@styles/Contribute.styles.scss'
import { Button, Divider } from 'antd'
import { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export function Contribute() {
  const [currentStep, setCurrentStep] = useState(0)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('submit:', data)
    setCurrentStep(currentStep + 1)
  }

  useEffect(() => {
    {
      // scroll to first error
      const elements = Object.keys(errors)
        .map((name) => document.getElementsByName(name)[0])
        .filter((el) => !!el)
      elements[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [errors])

  // "General" => 0 etc.
  // const [sectionTitleToStep, setSectionTitleToStep] = useState<Map<string, number>>(new Map())

  // useEffect(() => {
  //   // fetch survey from api
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     setError(false)
  //     try {
  //       const fetchedQuestions = await getSurvey()
  //       setSurveyQs(fetchedQuestions)
  //       setSteps(
  //         fetchedQuestions.sections.map((_, i) => {
  //           return { key: i } as StepProps
  //         }),
  //       )

  //       // map section title to index (used for dynamic navigation)
  //       const titleToIndex = new Map()
  //       fetchedQuestions.sections.forEach((section, i) => {
  //         titleToIndex.set(section.title, i)
  //       })
  //       // setSectionTitleToStep(titleToIndex)
  //     } catch (err) {
  //       console.log(err)
  //       setError(true)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // async function onNext() {
  //   await trigger() // validate form values
  //   const isValid = Object.keys(errors).length == 0
  //   if (isValid) {
  //     // setCurrentStep(currentStep + 1)
  //     const currentSection = survey!.sections[currentStep]
  //     if (typeof currentSection?.next === 'string') {
  //       const next = currentSection.next
  //       console.log('current:', currentStep, 'next:', sectionTitleToStep.get(next))
  //       setCurrentStep(sectionTitleToStep.get(next) || currentStep + 1) //TODO: fix
  //     } else {
  //       // dynamic transition, next is an object mapping category to next. Ex. engineering -> skills
  //       const category = ''
  //       setCurrentStep(sectionTitleToStep.get(currentSection.next[category]) || currentStep + 1)
  //     }
  //   }
  // }

  return (
    <div className='survey-container'>
      <h1 className='header-text'>Survey</h1>
      <div className='comment-container'>
        <BaseComment>
          This survey is designed to gather valuable insights from you in the most efficient way
          possible. By keeping the number of questions concise, we can ensure the survey takes
          approximately 12 minutes to complete.{' '}
          <strong>Some sections may be skipped depending on your job role</strong>. Your
          participation and willingness to help others in the Egyptian tech market are greatly
          appreciated.
        </BaseComment>
      </div>
      <Divider />

      <>
        {/* <Steps
          className='survey-steps'
          current={currentStep}
          items={steps}
          progressDot
          responsive={false}
          direction='horizontal'
        />
        <Progress
          className='survey-percentage'
          type='circle'
          percent={Math.ceil((currentStep / steps.length) * 100)}
          trailColor='rgba(0, 0, 0, 0.06)'
          steps={steps.length}
          showInfo={false}
        /> */}
        <form name='survey' onSubmit={handleSubmit(onSubmit)}>
          <GeneralQuestions control={control} errors={errors} register={register} />
          <Button htmlType='submit'>submit</Button>
        </form>
      </>
    </div>
  )
}
