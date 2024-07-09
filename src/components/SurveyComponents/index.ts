export * from './EngineeringActivities'
export * from './EngineeringSkills'
export * from './FormInput'
export * from './FormInputNumber'
export * from './FormItem'
export * from './FormSelect'
export * from './GeneralQuestions'
export * from './ManagementActivities'
export * from './Navigation'
export * from './ProductActivities'
export * from './SalaryQuestions'
export * from './SatisfactionQuestions'
export * from './SurveyStep'

export interface SurveyPageProps {
  next?: (step: number) => void
  back?: () => void
}
