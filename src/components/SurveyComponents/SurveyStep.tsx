import { ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}
export function SurveyStep({ children }: propTypes) {
  return <div className='survey-step'>{children}</div>
}
