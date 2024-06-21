import { FormSelect, StepCard } from '@components'
import { useEffect, useRef } from 'react'

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
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: true,
  },
  meetingsPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in meetings?',
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: true,
  },
  mentoringPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in mentoring?',
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: true,
  },
}

export function ManagementActivities() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    // scroll to top
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])
  return (
    <StepCard>
      <h2 ref={titleRef}>{managementActivities.title}</h2>
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
    </StepCard>
  )
}
