import { QUESTION_TYPE } from '@constants'
import { RegisterOptions } from 'react-hook-form'

export interface RequestType {
  business_focus?: string
  business_line?: string
  business_market?: string
  business_size?: string
  cs_degree?: string
  gender?: 'male' | 'female'
  include_relocated?: boolean
  include_remote_abroad?: boolean
  level?: string
  title?: string[]
  yoe_from_included?: number
  yoe_to_excluded?: number
  programming_language?: string
}

export interface Participant {
  title: string
  level: string
  gender: string
  csDegree: string
  businessMarket: string
  businessSize: string
  businessFocus: string
  businessLine: string
  yearsOfExperience: 0
  industries: string
  workSetting: string
  isEgp: string
  netCompensation: number
  location: string
}

export type GetParticipantsResponse = Participant[]

export interface Stats {
  totalCount?: number
  median?: number
  p20Compensation?: number
  p75Compensation?: number
  p90Compensation?: number
}

export interface Bucket {
  bucket: string
  count: number
}

export interface GetStatsResponse {
  stats: Stats
  buckets: Bucket[]
}

export interface Question {
  name: string
  type: QUESTION_TYPE
  label: string
  choices?: string[]
  isRequired: boolean
  validationRules?: RegisterOptions
}

export interface SurveySection {
  internalName: string // for organization
  title: string
  questions: Question[]
  next?: number | ((role: string) => number)
  back: boolean
}
