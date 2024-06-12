import { Survey } from '@types'
import data from '../survey.json'
export const getSurvey = async (): Promise<Survey> => {
  const survey: Survey = data

  return new Promise((resolve) => setTimeout(() => resolve(survey), 1000))
}
