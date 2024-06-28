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

export type GetRepoResponse = Participant[]

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

export type GetParticipantsResponse = GithubRepoContent[]

export interface GithubRepoContent {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  tags_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  forks_count: number
  disabled: boolean
  open_issues_count: number
  topics: string[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
}
