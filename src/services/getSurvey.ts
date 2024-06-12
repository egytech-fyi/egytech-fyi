import { Survey } from '@types'
import axios from 'axios'

export const getSurvey = async (): Promise<Survey> => {
  return axios
    .get('http://localhost:8787' + '/survey') // TODO: replace with BASE_URL
    .then((response) => response.data)
}
