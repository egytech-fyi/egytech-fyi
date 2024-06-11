import { UseQueryOptions, useQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from './constants'
import { GetParticipantsResponse, RequestType } from '@types'

const fetchParticipants = async (params: RequestType): Promise<GetParticipantsResponse> => {
  const response: AxiosResponse<GetParticipantsResponse> = await axios.get(
    BASE_URL + '/participants',
    { params },
  )
  return response.data
}
export const useGetParticipants = (
  params: RequestType,
  options: UseQueryOptions<GetParticipantsResponse>,
) => {
  return useQuery<GetParticipantsResponse>('participants', {
    queryFn: () => fetchParticipants(params),
    ...options,
  })
}
