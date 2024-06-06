import { UseQueryOptions, useQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from './constants'
import { GetStatsResponse, RequestType } from '@types'

const fetchStats = async (params: RequestType): Promise<GetStatsResponse> => {
  const response: AxiosResponse<GetStatsResponse> = await axios.get(BASE_URL + '/stats', {
    params,
    paramsSerializer: { indexes: null },
  })

  return response.data
}

export const useGetStats = (params: RequestType, options: UseQueryOptions<GetStatsResponse>) => {
  return useQuery<GetStatsResponse>(['stats', params], {
    queryFn: () => fetchStats(params),
    ...options,
  })
}
