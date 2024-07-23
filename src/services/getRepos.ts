import { UseQueryResult, useQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from './constants'
import { GetRepoResponse } from '@types'

const fetchRepos = async (): Promise<GetRepoResponse> => {
  const response: AxiosResponse<GetRepoResponse> = await axios.get(BASE_URL + '/repos')

  return response.data
}

export const useGetRepos = (): UseQueryResult<GetRepoResponse> => {
  return useQuery<GetRepoResponse>('repos', fetchRepos)
}
