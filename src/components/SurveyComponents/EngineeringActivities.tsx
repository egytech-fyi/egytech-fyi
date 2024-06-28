import { FormSelect, Navigation, SurveyStep } from '@components'
import { useEffect, useRef } from 'react'
import { scrollToRef } from '@utils'

const percentageBins = ['0-20%', '20-40%', '40-60%', '60-80%']

const activitiesQuestions = {
  title: 'Activities',
  codingPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in coding/testing/implementing?',
    choices: percentageBins,
    isRequired: false,
  },
  designingPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in designing?',
    choices: percentageBins,
    isRequired: false,
  },
  meetingsPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in meetings?',
    choices: percentageBins,
    isRequired: false,
  },
  mentoringPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in mentoring?',
    choices: percentageBins,
    isRequired: false,
  },
}
interface propTypes {
  next: (step: number) => void
  back: () => void
}
export function EngineeringActivities({ next, back }: propTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    scrollToRef(titleRef.current)
  }, [])
  return (
    <SurveyStep>
      <h2 className='header-subtext' ref={titleRef}>
        {activitiesQuestions.title}
      </h2>
      <FormSelect
        name='codingPercentage'
        label={activitiesQuestions.codingPercentage.question}
        isRequired={activitiesQuestions.codingPercentage.isRequired}
        options={activitiesQuestions.codingPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='designingPercentage'
        label={activitiesQuestions.designingPercentage.question}
        isRequired={activitiesQuestions.designingPercentage.isRequired}
        options={activitiesQuestions.designingPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='meetingsPercentage'
        label={activitiesQuestions.meetingsPercentage.question}
        isRequired={activitiesQuestions.meetingsPercentage.isRequired}
        options={activitiesQuestions.meetingsPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='mentoringPercentage'
        label={activitiesQuestions.mentoringPercentage.question}
        isRequired={activitiesQuestions.mentoringPercentage.isRequired}
        options={activitiesQuestions.mentoringPercentage.choices}
        isMultipleChoices={false}
      />
      <Navigation
        onNext={() => {
          next(5)
        }}
        onBack={() => back()}
      />
    </SurveyStep>
  )
}
