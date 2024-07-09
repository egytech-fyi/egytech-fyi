import { FormSelect, Navigation, SurveyPageProps, SurveyStep } from '@components'
import { scrollToRef } from '@utils'
import { useEffect, useRef } from 'react'

const satisfactionQuestions = {
  title: 'Satisfaction',
  earnDeserved: {
    type: 'MCQ',
    question: 'Do you think you earn what you deserve?',
    choices: [
      'Yes',
      'No, I should earn more than that',
      'No, I should earn less than that',
      'Not sure',
    ],
    isRequired: false,
  },
  levelDeserved: {
    type: 'MCQ',
    question: 'Do you think you are placed in the level you deserve?',
    choices: [
      'Yes',
      'No, I should be in a higher level',
      'No, I should be in a lesser level',
      'Not sure',
    ],
    isRequired: false,
  },
  workValue: {
    type: 'MCQ',
    question: 'Do you find value in your work?',
    choices: ['Yes', 'No', "I don't care, just here for the $"],
    isRequired: false,
  },
  learningOpportunities: {
    type: 'MCQ',
    question: 'Are you presented with the chance to learn new things in your job?',
    choices: ['Yes', 'No', 'Sometimes'],
    isRequired: false,
  },
  preferredEnvironment: {
    type: 'MCQ',
    question: 'Which work environment do you prefer?',
    choices: ['Remote', 'In-person', 'Hybrid (some remote, some in-person)'],
    isRequired: false,
  },
}

export function SatisfactionQuestions({ back }: SurveyPageProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    scrollToRef(titleRef.current)
  }, [])
  return (
    <SurveyStep>
      <h2 className='header-subtext' ref={titleRef}>
        {satisfactionQuestions.title}
      </h2>
      <FormSelect
        name='earnDeserved'
        label={satisfactionQuestions.earnDeserved.question}
        isRequired={satisfactionQuestions.earnDeserved.isRequired}
        options={satisfactionQuestions.earnDeserved.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='levelDeserved'
        label={satisfactionQuestions.levelDeserved.question}
        isRequired={satisfactionQuestions.levelDeserved.isRequired}
        options={satisfactionQuestions.levelDeserved.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='workValue'
        label={satisfactionQuestions.workValue.question}
        isRequired={satisfactionQuestions.workValue.isRequired}
        options={satisfactionQuestions.workValue.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='learningOpportunities'
        label={satisfactionQuestions.learningOpportunities.question}
        isRequired={satisfactionQuestions.learningOpportunities.isRequired}
        options={satisfactionQuestions.learningOpportunities.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='preferredEnvironment'
        label={satisfactionQuestions.preferredEnvironment.question}
        isRequired={satisfactionQuestions.preferredEnvironment.isRequired}
        options={satisfactionQuestions.preferredEnvironment.choices}
        isMultipleChoices={false}
      />
      <Navigation onBack={back} submit />
    </SurveyStep>
  )
}
