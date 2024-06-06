export const titleMap: Record<string, string> = {
  backend: 'Backend Engineer',
  frontend: 'Frontend Engineer',
  fullstack: 'Full-stack Engineer',
  hardware: 'Hardware Engineer (Semiconductors, Digital Design, Electronics, etc)',
  ai_automation: 'AI & Automation Engineer',
  embedded: 'Embedded Systems Engineer',
  mobile: 'Mobile Development Engineer',
  security: 'Security/Network Engineer',
  devops_sre_platform: 'DevOps / SRE / Platform',
  testing: 'QA / SDET Engineer',
  crm: 'CRM Developer',
  data_analytics: 'Data Analytics',
  data_engineer: 'Data Engineer',
  data_scientist: 'Data Scientist',
  engineering_manager: 'Engineering Manager',
  executive: 'Executive (C-level, director, etc.)',
  ui_ux: 'UI/UX Designer/Engineer',
  product_manager: 'Product Manager',
  product_owner: 'Product Owner',
  scrum: 'Scrum Master',
  research: 'R&D Engineer (Computer Vision, NLP, etc.)',
  system_arch: 'Systems Architect',
  technical_support: 'Technical Support',
}

export const levelMap: Record<string, string> = {
  intern: 'Intern',
  junior: 'Junior',
  mid_level: 'Mid-level',
  senior: 'Senior',
  staff: 'Staff',
  senior_staff: 'Senior Staff',
  principal: 'Principal',
  senior_principal: 'Senior Principal',
  team_lead: 'Team Lead',
  manager: 'Manager',
  senior_manager: 'Senior Manager',
  director: 'Director',
  group_product_manager: 'Group Product Manager',
  vp: 'VP',
  c_level: 'C-Level',
}

export const genderMap: Record<string, string> = {
  female: 'Female',
  male: 'Male',
}

export const degreeMap: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
}

export const businessMarketMap: Record<string, string> = {
  global: 'Global',
  regional: 'Regional',
  local: 'Local',
}

export const businessSizeMap: Record<string, string> = {
  large: 'A Large Enterprise/Multinational Company',
  medium: 'A Small and Medium Enterprise',
  small: 'A Start-up',
}

export const businessFocusMap: Record<string, string> = {
  product: 'Product-based company',
  software_house: 'Software House',
}

export const businessLineMap: Record<string, string> = {
  b2b: 'B2B',
  b2c: 'B2C',
  both: 'B2B & B2C lines',
}

export const keyValueMap = {
  ...titleMap,
  ...levelMap,
  ...genderMap,
  ...degreeMap,
  ...businessMarketMap,
  ...businessSizeMap,
  ...businessFocusMap,
  ...businessLineMap,
}

export const fieldKeyMap: Record<string, string> = {
  business_focus: 'Business Focus',
  business_line: 'Business Line',
  business_market: 'Business Market',
  business_size: 'Business Size',
  cs_degree: 'CS Degree',
  gender: 'Gender',
  include_relocated: 'Include Relocated',
  include_remote_abroad: 'Include Remote Abroad',
  level: 'Level',
  salary: 'Salary',
  title: 'Title',
  yoe_from_included: 'Min Years of Experience',
  yoe_to_excluded: 'Max Years of Experience',
  programming_language: 'Programming Language',
}

export const programmingLanguageMap: Record<string, string> = {
  java_script: 'JavaScript',
  type_script: 'TypeScript',
  python: 'Python',
  c_sharp: 'C#',
  java: 'Java',
  php: 'PHP',
  c_cplusplus: 'C/C++',
  kotlin: 'Kotlin',
  swift: 'Swift',
  dart: 'Dart',
  go: 'Go',
  r: 'R',
  scala: 'Scala',
  rust: 'Rust',
}
