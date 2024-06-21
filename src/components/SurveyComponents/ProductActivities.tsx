import { FormInput, FormSelect, StepCard } from '@components'
import { useEffect, useRef } from 'react'

const productActivities = {
  title: 'Activities',
  quarterlyActivities: {
    type: 'checkbox',
    question: 'Which functions of these are part of your quarterly activities?',
    choices: [
      'Collaborating with technical and design functions',
      'Collaborating with other functions',
      'Defining product strategy',
      'Define product requirements',
      'Engaging with customers and partners',
      'Reviewing metrics',
      'Market research and competition',
      'Planning and maintaining roadmaps',
      'Pricing and packaging',
      'Coaching, team management and recruiting',
    ],
    isRequired: false,
  },
  planningPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in planning?',
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: false,
  },
  meetingsPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent in meetings?',
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: false,
  },
  dataAnalysisPercentage: {
    type: 'MCQ',
    question: 'What percentage of your week is spent analyzing data?',
    choices: ['0-20%', '20-40%', '40-60%', '60-80%'],
    isRequired: false,
  },
  weeklyTools: {
    type: 'checkbox',
    question: 'Which of these tools do you use in your weekly activities?',
    choices: [
      'Notion',
      'Obsidian',
      'Jira',
      'Trello',
      'Miro',
      'Hotjar',
      'Confluence',
      'Looker Studio',
      'Power BI',
      'Amplitude',
      'UX Pin',
      'ProductBoard',
      'ProductPlan',
      'Aha!',
      'Tableau',
      'SurveyMonkey',
      'Typeform',
      'UserVoice',
      'Gartner',
      'Figma',
      'Adobe XD',
      'Proto.io',
      'ClickUp',
    ],
    isRequired: false,
  },
  surveyTools: {
    type: 'string',
    question: 'Which tools do you use for customer surveys?',
    isRequired: false,
  },
  projectManagementTools: {
    type: 'string',
    question: 'Which tools do you use for project management?',
    isRequired: false,
  },
  pricingDecisionMaker: {
    type: 'MCQ',
    question: 'Who takes pricing and packaging decisions for your product?',
    choices: [
      'You',
      'Executive team (C-Level)',
      'Sales & Marketing',
      'We have dedicated pricing team (or RevOps)',
      'Other:',
    ],
    isRequired: false,
  },
  aiAssistantUse: {
    type: 'string',
    question:
      'When do you find it super useful to use the help of an AI assistant (ChatGPT, Gemini, etc.)',
    isRequired: false,
  },
  prototypeTools: {
    type: 'string',
    question: 'If you had a product idea, which tools would you use to build a prototype?',
    isRequired: false,
  },
  abTestingTools: {
    type: 'string',
    question: 'Which tools do you use for A/B Testing (or feature flagging)?',
    isRequired: false,
  },
  dataAnalysisTools: {
    type: 'MCQ',
    question: 'What are your go-to tools to analyze data?',
    choices: [
      'Sheets/Excel',
      'SQL (or database query languages in general)',
      'Programming Languages (e.g python, R, etc.)',
      'Other:',
    ],
    isRequired: false,
  },
  noCodePrototypeTools: {
    type: 'string',
    question: 'Which no-code tool do you find very powerful to build a prototype with?',
    isRequired: false,
  },
  sessionReplayTools: {
    type: 'string',
    question: 'Which session replay and heatmap tools do you use?',
    isRequired: false,
  },
  userAnalysisTools: {
    type: 'string',
    question: 'Which user analysis tools do you use?',
    isRequired: false,
  },
}

export function ProductActivities() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    // scroll to top
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])
  return (
    <StepCard>
      <h2 ref={titleRef}>{productActivities.title}</h2>
      <FormSelect
        name='quarterlyActivities'
        label={productActivities.quarterlyActivities.question}
        isRequired={productActivities.quarterlyActivities.isRequired}
        options={productActivities.quarterlyActivities.choices}
        isMultipleChoices={true}
      />

      <FormSelect
        name='planningPercentage'
        label={productActivities.planningPercentage.question}
        isRequired={productActivities.planningPercentage.isRequired}
        options={productActivities.planningPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='meetingsPercentage'
        label={productActivities.meetingsPercentage.question}
        isRequired={productActivities.meetingsPercentage.isRequired}
        options={productActivities.meetingsPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='dataAnalysisPercentage'
        label={productActivities.dataAnalysisPercentage.question}
        isRequired={productActivities.dataAnalysisPercentage.isRequired}
        options={productActivities.dataAnalysisPercentage.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='weeklyTools'
        label={productActivities.weeklyTools.question}
        isRequired={productActivities.weeklyTools.isRequired}
        options={productActivities.weeklyTools.choices}
        isMultipleChoices={true}
      />

      <FormInput
        name='surveyTools'
        label={productActivities.surveyTools.question}
        isRequired={productActivities.surveyTools.isRequired}
      />

      <FormInput
        name='projectManagementTools'
        label={productActivities.projectManagementTools.question}
        isRequired={productActivities.projectManagementTools.isRequired}
      />

      <FormSelect
        name='pricingDecisionMaker'
        label={productActivities.pricingDecisionMaker.question}
        isRequired={productActivities.pricingDecisionMaker.isRequired}
        options={productActivities.pricingDecisionMaker.choices}
        isMultipleChoices={false}
      />

      <FormInput
        name='aiAssistantUse'
        label={productActivities.aiAssistantUse.question}
        isRequired={productActivities.aiAssistantUse.isRequired}
      />

      <FormInput
        name='prototypeTools'
        label={productActivities.prototypeTools.question}
        isRequired={productActivities.prototypeTools.isRequired}
      />

      <FormInput
        name='abTestingTools'
        label={productActivities.abTestingTools.question}
        isRequired={productActivities.abTestingTools.isRequired}
      />

      <FormSelect
        name='dataAnalysisTools'
        label={productActivities.dataAnalysisTools.question}
        isRequired={productActivities.dataAnalysisTools.isRequired}
        options={productActivities.dataAnalysisTools.choices}
        isMultipleChoices={false}
      />

      <FormInput
        name='noCodePrototypeTools'
        label={productActivities.noCodePrototypeTools.question}
        isRequired={productActivities.noCodePrototypeTools.isRequired}
      />

      <FormInput
        name='sessionReplayTools'
        label={productActivities.sessionReplayTools.question}
        isRequired={productActivities.sessionReplayTools.isRequired}
      />

      <FormInput
        name='userAnalysisTools'
        label={productActivities.userAnalysisTools.question}
        isRequired={productActivities.userAnalysisTools.isRequired}
      />
    </StepCard>
  )
}
