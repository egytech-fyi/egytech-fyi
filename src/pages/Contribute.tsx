import { BaseComment, FormStep } from '@components'
import { getSurvey } from '@services'
import '@styles/Contribute.styles.scss'
import { SurveyType } from '@types'
import type { StepProps } from 'antd'
import { Divider, Progress, Spin, Steps } from 'antd'
import { useEffect, useState } from 'react'

export function Contribute() {
  const [surveyQs, setSurveyQs] = useState<SurveyType | null>(null)
  // const [surveyState, setSurveyState] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [steps, setSteps] = useState<StepProps[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  // "General" => 0 etc.
  // const [sectionTitleToStep, setSectionTitleToStep] = useState<Map<string, number>>(new Map())

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log('submit:', data)
  //   //TODO: change endpoint
  //   axios.post('http://localhost:8787' + '/survey', data).catch((error) => console.log(error))
  //   setCurrentStep(currentStep + 1)
  //   // TODO: set cookie as form submitted
  //   // TODO: disable submit button
  // }

  useEffect(() => {
    // fetch survey from api
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const fetchedQuestions = await getSurvey()
        setSurveyQs(fetchedQuestions)
        setSteps(
          fetchedQuestions.sections.map((_, i) => {
            return { key: i } as StepProps
          }),
        )

        // map section title to index (used for dynamic navigation)
        const titleToIndex = new Map()
        fetchedQuestions.sections.forEach((section, i) => {
          titleToIndex.set(section.title, i)
        })
        // setSectionTitleToStep(titleToIndex)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

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
      {isLoading && <Spin size='large' />}
      {!isLoading && !error && (
        <>
          <Steps
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
          />

          {surveyQs?.sections.map((section, i) => {
            // render each survey section
            return (
              currentStep == i && (
                <FormStep
                  section={section}
                  key={i}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  numSteps={steps.length}
                />
              )
            )
          })}
        </>
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
