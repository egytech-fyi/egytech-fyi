import { FormSelect, Navigation, SurveyStep } from '@components'
import { scrollToRef } from '@utils'
import { useEffect, useRef } from 'react'
const percentageBins = ['0-20%', '20-40%', '40-60%', '60-80%']
const managementActivities = {
  title: 'Activities',
  onboardingDuration: {
    type: 'MCQ',
    question: 'How long does it take to onboard a new talent in your team?',
    choices: ['2 Weeks', '1 Month', '2 Months', 'Other:'],
    isRequired: true,
  },
  seniorHiringDuration: {
    type: 'MCQ',
    question: 'How long does it usually take to hire a senior talent?',
    choices: ['1 Month', '1-3 Months', '3-5 Months', '5+ Months', 'Other:'],
    isRequired: true,
  },
  planningPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in planning?',
    choices: percentageBins,
    isRequired: true,
  },
  meetingsPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in meetings?',
    choices: percentageBins,
    isRequired: true,
  },
  mentoringPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in mentoring?',
    choices: percentageBins,
    isRequired: true,
  },
}
interface propTypes {
  next: (step: number) => void
  back: () => void
}
export function ManagementActivities({ next, back }: propTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    scrollToRef(titleRef.current)
  }, [])
  return (
    <SurveyStep>
      <h2 className='header-subtext' ref={titleRef}>
        {managementActivities.title}
      </h2>
      <FormSelect
        name='onboardingDuration'
        label={managementActivities.onboardingDuration.question}
        isRequired={managementActivities.onboardingDuration.isRequired}
        options={managementActivities.onboardingDuration.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='seniorHiringDuration'
        label={managementActivities.seniorHiringDuration.question}
        isRequired={managementActivities.seniorHiringDuration.isRequired}
        options={managementActivities.seniorHiringDuration.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='planningPercentage'
        label={managementActivities.planningPercentage.question}
        isRequired={managementActivities.planningPercentage.isRequired}
        options={managementActivities.planningPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='meetingsPercentage'
        label={managementActivities.meetingsPercentage.question}
        isRequired={managementActivities.meetingsPercentage.isRequired}
        options={managementActivities.meetingsPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='mentoringPercentage'
        label={managementActivities.mentoringPercentage.question}
        isRequired={managementActivities.mentoringPercentage.isRequired}
        options={managementActivities.mentoringPercentage.choices}
        isMultipleChoices={false}
      />
      <Navigation
        onNext={() => {
          next(5)
        }}
        onBack={back}
      />
    </SurveyStep>
  )
}
