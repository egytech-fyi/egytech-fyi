import { FormInput, FormInputNumber, Navigation, StepCard } from '@components'
import { useEffect, useRef } from 'react'
import { FormSelect } from './FormSelect'

const generalQuestions = {
  title: 'General',
  gender: {
    type: 'MCQ',
    question: "You're a",
    choices: ['Male', 'Female'],
    isRequired: true,
  },
  age: {
    type: 'number',
    question: 'How old are you?',
    isRequired: true,
  },
  CSDegree: {
    type: 'MCQ',
    question: 'Do you have a computer science/engineering degree?',
    choices: ['Yes', 'No'],
    isRequired: true,
  },
  linkedinProfile: {
    type: 'string',
    question: 'Your Linkedin Profile',
    isRequired: false,
  },
  email: {
    type: 'string',
    question: 'Your email address',
    isRequired: false,
  },
  currentCompany: {
    type: 'string',
    question: 'Your current company:',
    isRequired: true,
  },
  jobTitle: {
    type: 'string',
    question: 'Your job title:',
    isRequired: true,
  },
  role: {
    type: 'MCQ',
    question: 'Do you consider yourself a/an',
    choices: [
      'Backend Engineer',
      'Frontend Engineer',
      'Full-stack Engineer',
      'QA / SDET Engineer',
      'Mobile Development Engineer',
      'DevOps / SRE / Platform',
      'Data Scientist',
      'Data Engineer',
      'Data Analytics',
      'Engineering Manager',
      'Executive (C-level, director, etc.)',
      'Systems Architect',
      'Embedded Systems Engineer',
      'R&D Engineer (Computer Vision, NLP, etc.)',
      'AI & Automation Engineer',
      'UI/UX Designer/Engineer',
      'Hardware Engineer (Semiconductors, Digital Design, Electronics, etc)',
      'Product Owner',
      'Product Manager',
      'Scrum Master',
      'Security/Network Engineer',
      'Technical Support',
      'CRM Developer',
    ],
    isRequired: true,
  },
  level: {
    type: 'MCQ',
    question: 'Your level at your current company is:',
    choices: [
      'Junior (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Mid-level (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Senior (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Team Lead',
      'Staff (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Senior Staff (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Principal (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Group Product Manager',
      'Head of Products',
      'Senior Principal (Software Engineer, Data Scientist, Product Manager, etc.)',
      'Manager',
      'Senior Manager',
      'Director',
      'Group Director',
      'VP (Engineering, Product, etc.)',
      'CTO / CPO / Chief Scientist / etc.',
      'Other:',
    ],
    isRequired: true,
  },
  yearsOfExperience: {
    type: 'number',
    question: 'Years of experience:',
    isRequired: true,
  },
  companiesLast5Years: {
    type: 'number',
    question: 'How many companies did you work at in the last 5 years?',
    isRequired: true,
  },
  sameCompanyLastYear: {
    type: 'MCQ',
    question: 'Did you work at the same company last year (January 2023) ?',
    choices: ['Yes', 'No'],
    isRequired: false,
  },
  workLocation: {
    type: 'MCQ',
    question: 'You work from',
    choices: [
      'Office for a company in Egypt',
      'Home for a company in Egypt',
      'Hybrid for a company in Egypt (e.g 2-3 days from home or office)',
      'Home for a company abroad (Remote employee)',
      'Abroad in another country (Relocated elsewhere)',
    ],
    isRequired: true,
  },
  companySize: {
    type: 'MCQ',
    question: 'Your company is considered:',
    choices: [
      'A Start-up',
      'A Small and Medium Enterprise',
      'A Large Enterprise/Multinational Company',
    ],
    isRequired: true,
  },
  companyLocationEgypt: {
    type: 'MCQ',
    question: "Company Location in case it's operating from Egypt:",
    choices: [
      'No site in Egypt',
      'Cairo',
      'Alexandria',
      'Hurghada (Or Gouna)',
      'Port Said / Suez',
      'Mansoura',
      'Faiyum',
      'Luxor / Aswan',
      'Other',
    ],
    isRequired: true,
  },
  companyType: {
    type: 'MCQ',
    question: 'You work in a:',
    choices: ['Software House', 'Product-based company', 'Other'],
    isRequired: true,
  },
  businessFocus: {
    type: 'MCQ',
    question: 'The business main focus is:',
    choices: ['B2B', 'B2C', 'B2B & B2C lines'],
    isRequired: true,
  },
  businessScope: {
    type: 'MCQ',
    question: 'The business is',
    choices: [
      'Local / National (operates inside Egypt)',
      'Regional (has some business lines in Saudi Arabia, Emirates, etc)',
      'Global (has some business lines in the region, the US, Europe, Asia, etc.)',
    ],
    isRequired: false,
  },
  businessIndustries: {
    type: 'checkbox',
    question: 'The industries of the business are',
    choices: [
      'Fintech',
      'Healthcare',
      'Insurance',
      'Automotive',
      'Delivery',
      'Supply Chain',
      'Transportation',
      'Telecommunications',
      'Energy',
      'Manufacturing',
      'Technology',
      'Education',
      'Human Resources Services',
      'Law',
      'Agriculture',
      'Production',
      'Aerospace',
      'Other',
    ],
    isRequired: false,
  },
}
interface propTypes {
  next: (step: number) => void
  back: (step: number) => void
}
export function GeneralQuestions({ next }: propTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    // scroll to top
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])
  return (
    <StepCard>
      <h2 ref={titleRef}>{generalQuestions.title}</h2>
      <FormSelect
        name='gender'
        label={generalQuestions.gender.question}
        isRequired={generalQuestions.gender.isRequired}
        options={generalQuestions.gender.choices}
        isMultipleChoices={false}
      />

      <FormInputNumber
        name='age'
        label={generalQuestions.age.question}
        isRequired={generalQuestions.age.isRequired}
        max={100}
        min={16} // need min?
      />
      <FormSelect
        name='degree'
        label={generalQuestions.CSDegree.question}
        isRequired={generalQuestions.CSDegree.isRequired}
        options={generalQuestions.CSDegree.choices}
        isMultipleChoices={false}
      />
      <FormInput
        name='linkedin'
        label={generalQuestions.linkedinProfile.question}
        isRequired={generalQuestions.linkedinProfile.isRequired}
      />
      <FormInput
        name='email'
        label={generalQuestions.email.question}
        isRequired={generalQuestions.email.isRequired}
      />
      <FormInput
        name='company'
        label={generalQuestions.currentCompany.question}
        isRequired={generalQuestions.currentCompany.isRequired}
      />
      <FormInput
        name='job-title'
        label={generalQuestions.jobTitle.question}
        isRequired={generalQuestions.jobTitle.isRequired}
      />
      <FormSelect
        name='role'
        label={generalQuestions.role.question}
        isRequired={generalQuestions.role.isRequired}
        options={generalQuestions.role.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='level'
        label={generalQuestions.level.question}
        isRequired={generalQuestions.level.isRequired}
        options={generalQuestions.level.choices}
        isMultipleChoices={false}
      />
      <FormInputNumber
        name='years-experience'
        label={generalQuestions.yearsOfExperience.question}
        isRequired={generalQuestions.yearsOfExperience.isRequired}
        max={50} // too low? high?
      />
      <FormInputNumber
        name='companies-last-5'
        label={generalQuestions.companiesLast5Years.question}
        isRequired={generalQuestions.companiesLast5Years.isRequired}
        max={10}
      />
      <FormSelect
        name='same-company'
        label={generalQuestions.sameCompanyLastYear.question}
        isRequired={generalQuestions.sameCompanyLastYear.isRequired}
        options={generalQuestions.sameCompanyLastYear.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='employee-location'
        label={generalQuestions.workLocation.question}
        isRequired={generalQuestions.workLocation.isRequired}
        options={generalQuestions.workLocation.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='company-size'
        label={generalQuestions.companySize.question}
        isRequired={generalQuestions.companySize.isRequired}
        options={generalQuestions.companySize.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='company-location'
        label={generalQuestions.companyLocationEgypt.question}
        isRequired={generalQuestions.companyLocationEgypt.isRequired}
        options={generalQuestions.companyLocationEgypt.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='company-type'
        label={generalQuestions.companyType.question}
        isRequired={generalQuestions.companyType.isRequired}
        options={generalQuestions.companyType.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='business-focus'
        label={generalQuestions.businessFocus.question}
        isRequired={generalQuestions.businessFocus.isRequired}
        options={generalQuestions.businessFocus.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='business-scope'
        label={generalQuestions.businessScope.question}
        isRequired={generalQuestions.businessScope.isRequired}
        options={generalQuestions.businessScope.choices}
        isMultipleChoices={false}
      />
      <FormSelect
        name='business-industries'
        label={generalQuestions.businessIndustries.question}
        isRequired={generalQuestions.businessIndustries.isRequired}
        options={generalQuestions.businessIndustries.choices}
        isMultipleChoices={true}
      />
      <Navigation
        onNext={() => {
          next(1)
        }}
      />
    </StepCard>
  )
}
