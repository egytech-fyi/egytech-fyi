import { FormInput, FormInputNumber, FormSelect, Navigation, SurveyStep } from '@components'
import { useEffect, useRef } from 'react'

const salaryQuestions = {
  title: 'Salary',
  salaryCurrency: {
    type: 'MCQ',
    question: 'In what currency do you receive your salary?',
    choices: [
      'EGP',
      'Another currency (e.g USD)',
      'Hybrid (e.g: Base in EGP and Cost of Living Allowance in EUR)',
    ],
    isRequired: true,
  },
  peggedToCentralBank: {
    type: 'MCQ',
    question:
      "If part or all your salary is pegged to another currency, is it pegged to the central bank's transfer rate?",
    choices: ['Yes', 'No'],
    isRequired: false,
  },
  otherCurrency: {
    type: 'MCQ',
    question:
      "If you receive your salary in (or if it's pegged to) another currency or in a hybrid setting, what's the other currency (Let's call it X)?",
    choices: ['USD', 'EUR', 'SAR', 'AED', 'GBP', 'KWD', 'Other:'],
    isRequired: false,
  },
  egpNetMonthlySalary: {
    type: 'number',
    question: 'EGP Net Monthly Salary',
    isRequired: true,
  },
  xNetMonthlySalary: {
    type: 'number',
    question: 'X Net Monthly Salary',
    isRequired: true,
  },
  egpNetMonthlyBonus: {
    type: 'number',
    question: 'EGP Net Monthly Bonus',
    isRequired: true,
  },
  xNetMonthlyBonus: {
    type: 'number',
    question: 'X Net Monthly Bonus',
    isRequired: true,
  },
  stocksValueOneYear: {
    type: 'number',
    question:
      "If you're receiving stocks/equity, what's the value in ONE YEAR (In USD, 2 thousands == 2000)",
    isRequired: false,
  },
  bonusNotes: {
    type: 'string',
    question:
      "Do you want to add any notes about your bonuses that weren't covered in the previous questions?",
    isRequired: false,
  },
  lastSalaryIncrease: {
    type: 'MCQ',
    question: 'When was your most recent salary increase implemented?',
    choices: [
      'A new hire',
      'Less than 3 months',
      'Less than 6 months',
      'Less than a year',
      'More than a year',
    ],
    isRequired: false,
  },
  netSalaryDec2022: {
    type: 'number',
    question:
      'What was your EGP NET salary in December 2022 including any bonuses (USD == 24.5 EGP then)',
    isRequired: false,
  },
  expectedNewJobSalary: {
    type: 'number',
    question:
      'If you were to apply for a new job, how much will your expected net salary be in EGP?',
    isRequired: false,
  },
}
interface propTypes {
  next: (step: number) => void
  back: () => void
}

export function SalaryQuestions({ next, back }: propTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])
  return (
    <SurveyStep>
      <h2 className='header-subtext' ref={titleRef}>
        {salaryQuestions.title}
      </h2>
      <FormSelect
        name='salaryCurrency'
        label={salaryQuestions.salaryCurrency.question}
        isRequired={salaryQuestions.salaryCurrency.isRequired}
        options={salaryQuestions.salaryCurrency.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='peggedToCentralBank'
        label={salaryQuestions.peggedToCentralBank.question}
        isRequired={salaryQuestions.peggedToCentralBank.isRequired}
        options={salaryQuestions.peggedToCentralBank.choices}
        isMultipleChoices={false}
      />

      <FormSelect
        name='otherCurrency'
        label={salaryQuestions.otherCurrency.question}
        isRequired={salaryQuestions.otherCurrency.isRequired}
        options={salaryQuestions.otherCurrency.choices}
        isMultipleChoices={false}
      />

      <FormInputNumber
        name='egpNetMonthlySalary'
        label={salaryQuestions.egpNetMonthlySalary.question}
        isRequired={salaryQuestions.egpNetMonthlySalary.isRequired}
      />

      <FormInputNumber
        name='xNetMonthlySalary'
        label={salaryQuestions.xNetMonthlySalary.question}
        isRequired={salaryQuestions.xNetMonthlySalary.isRequired}
      />

      <FormInputNumber
        name='egpNetMonthlyBonus'
        label={salaryQuestions.egpNetMonthlyBonus.question}
        isRequired={salaryQuestions.egpNetMonthlyBonus.isRequired}
      />

      <FormInputNumber
        name='xNetMonthlyBonus'
        label={salaryQuestions.xNetMonthlyBonus.question}
        isRequired={salaryQuestions.xNetMonthlyBonus.isRequired}
      />

      <FormInputNumber
        name='stocksValueOneYear'
        label={salaryQuestions.stocksValueOneYear.question}
        isRequired={salaryQuestions.stocksValueOneYear.isRequired}
      />

      <FormInput
        name='bonusNotes'
        label={salaryQuestions.bonusNotes.question}
        isRequired={salaryQuestions.bonusNotes.isRequired}
      />

      <FormSelect
        name='lastSalaryIncrease'
        label={salaryQuestions.lastSalaryIncrease.question}
        isRequired={salaryQuestions.lastSalaryIncrease.isRequired}
        options={salaryQuestions.lastSalaryIncrease.choices}
        isMultipleChoices={false}
      />

      <FormInputNumber
        name='netSalaryDec2022'
        label={salaryQuestions.netSalaryDec2022.question}
        isRequired={salaryQuestions.netSalaryDec2022.isRequired}
      />

      <FormInputNumber
        name='expectedNewJobSalary'
        label={salaryQuestions.expectedNewJobSalary.question}
        isRequired={salaryQuestions.expectedNewJobSalary.isRequired}
      />
      <Navigation
        onNext={() => {
          next(6)
        }}
        onBack={() => back()}
      />
    </SurveyStep>
  )
}
