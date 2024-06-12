import { Survey } from '@types'
import data from '../survey.json'
export const getSurvey = async (): Promise<Survey> => {
  const survey = data as Survey

  return new Promise((resolve) => setTimeout(() => resolve(survey), 1000))
}
