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
export enum QuestionType {
  STRING = 'string',
  NUMBER = 'number',
  MCQ = 'MCQ',
  CHECKBOX = 'checkbox',
  URL = 'URL',
}

export interface Question {
  question: string
  name?: string
  type: QuestionType
  // type: 'MCQ' | 'number' | 'string' | 'checkbox' | 'URL'
  choices?: string[]
  isRequired: boolean
}
export interface SectionType {
  title: string
  questions: Question[]
  next: string | { [key: string]: string }
}

export interface SurveyType {
  sections: SectionType[]
}
