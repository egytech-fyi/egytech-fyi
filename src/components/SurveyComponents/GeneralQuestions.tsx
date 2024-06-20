import { FormInput, StepCard } from '@components'
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { FormInputNumber } from './FormInputNumber'
import { FormSelect } from './FormSelect'

const Questions = {
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
interface GeneralQuestionsPropsType {
  control: Control
  errors: FieldErrors
  register: UseFormRegister<FieldValues>
}
export function GeneralQuestions({ control, errors }: GeneralQuestionsPropsType) {
  return (
    <StepCard>
      <FormSelect
        name='gender'
        label={Questions.gender.question}
        isRequired={Questions.gender.isRequired}
        options={Questions.gender.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />

      <FormInputNumber
        name='age'
        label={Questions.age.question}
        isRequired={Questions.age.isRequired}
        control={control}
        errors={errors}
        max={100}
        min={16} // need min?
      />
      <FormSelect
        name='degree'
        label={Questions.CSDegree.question}
        isRequired={Questions.CSDegree.isRequired}
        options={Questions.CSDegree.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormInput
        name='linkedin'
        label={Questions.linkedinProfile.question}
        isRequired={Questions.linkedinProfile.isRequired}
        control={control}
        errors={errors}
      />

      <FormInput
        name='email'
        label={Questions.email.question}
        isRequired={Questions.email.isRequired}
        control={control}
        errors={errors}
      />
      <FormInput
        name='company'
        label={Questions.currentCompany.question}
        isRequired={Questions.currentCompany.isRequired}
        control={control}
        errors={errors}
      />
      <FormInput
        name='job-title'
        label={Questions.jobTitle.question}
        isRequired={Questions.jobTitle.isRequired}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='role'
        label={Questions.role.question}
        isRequired={Questions.role.isRequired}
        options={Questions.role.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='level'
        label={Questions.level.question}
        isRequired={Questions.level.isRequired}
        options={Questions.level.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormInputNumber
        name='years-experience'
        label={Questions.yearsOfExperience.question}
        isRequired={Questions.yearsOfExperience.isRequired}
        control={control}
        errors={errors}
        max={50} // too low? high?
      />
      <FormInputNumber
        name='companies-last-5'
        label={Questions.companiesLast5Years.question}
        isRequired={Questions.companiesLast5Years.isRequired}
        control={control}
        errors={errors}
        max={10}
      />
      <FormSelect
        name='same-company'
        label={Questions.sameCompanyLastYear.question}
        isRequired={Questions.sameCompanyLastYear.isRequired}
        options={Questions.sameCompanyLastYear.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='employee-location'
        label={Questions.workLocation.question}
        isRequired={Questions.workLocation.isRequired}
        options={Questions.workLocation.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='company-size'
        label={Questions.companySize.question}
        isRequired={Questions.companySize.isRequired}
        options={Questions.companySize.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='company-location'
        label={Questions.companyLocationEgypt.question}
        isRequired={Questions.companyLocationEgypt.isRequired}
        options={Questions.companyLocationEgypt.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='company-type'
        label={Questions.companyType.question}
        isRequired={Questions.companyType.isRequired}
        options={Questions.companyType.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='business-focus'
        label={Questions.businessFocus.question}
        isRequired={Questions.businessFocus.isRequired}
        options={Questions.businessFocus.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='business-scope'
        label={Questions.businessScope.question}
        isRequired={Questions.businessScope.isRequired}
        options={Questions.businessScope.choices}
        isMultipleChoices={false}
        control={control}
        errors={errors}
      />
      <FormSelect
        name='business-industries'
        label={Questions.businessIndustries.question}
        isRequired={Questions.businessIndustries.isRequired}
        options={Questions.businessIndustries.choices}
        isMultipleChoices={true}
        control={control}
        errors={errors}
      />
    </StepCard>
  )
}
