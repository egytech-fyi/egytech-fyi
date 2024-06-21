import { FormSelect, Navigation, StepCard } from '@components'
import { useEffect, useRef } from 'react'

const engineeringSkills = {
  title: 'Skills',
  programmingLanguages: {
    type: 'checkbox',
    question: 'Which programming languages do you use the most?',
    choices: [
      'C#',
      'Java',
      'PHP',
      'JavaScript',
      'Python',
      'Go',
      'Rust',
      'Ruby',
      'C/C++',
      'TypeScript',
      'Scala',
      'Kotlin',
      'Swift',
      'R',
      'HTML/CSS',
      'Other:',
    ],
    isRequired: false,
  },
  frameworks: {
    type: 'checkbox',
    question: 'Which frameworks do you use the most?',
    choices: [
      'ASP.Net',
      'Spring',
      'Django',
      'Flask',
      'Laravel',
      'Express',
      'FastAPI',
      'Ruby on Rails',
      'React',
      'Angular',
      'JQuery',
      'Vue.js',
      'NestJS',
      'Nuxt.js',
      'Next.js',
      'Gatsby',
      'Deno',
      'Tensorflow',
      'Pytorch',
      'OpenCV',
      'Autosar',
      'React Native',
      'Ionic',
      'Flutter',
      'Android',
      'Other:',
    ],
    isRequired: false,
  },
  cloudProviders: {
    type: 'checkbox',
    question: 'Which cloud provider hosts the services you help in building?',
    choices: ['AWS', 'GCP', 'Azure', 'Cloudflare', 'Firebase', 'Self-hosted', 'Other:'],
    isRequired: false,
  },
  databases: {
    type: 'checkbox',
    question: 'Which databases do you use the most?',
    choices: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'SQL Server',
      'Redis',
      'MariaDB',
      'ElasticSearch',
      'Oracle',
      'DynamoDB',
      'Cassandra',
      'Firebase',
      'Other:',
    ],
    isRequired: false,
  },
  technologies: {
    type: 'checkbox',
    question: 'Which of these technologies do you use in your daily activities?',
    choices: [
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'TeamCity',
      'CircleCI',
      'TravisCI',
      'Kafka',
      'RabbitMQ',
      'Spark',
      'Redshift',
      'Snowflake',
      'BigQuery',
      'Airflow',
      'Tableu',
      'Looker',
      'Hive',
      'PowerBI',
      'Other:',
    ],
    isRequired: false,
  },
}
interface propTypes {
  next: (step: number) => void
  back: () => void
}
export function EngineeringSkills({ next, back }: propTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    // scroll to top
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])
  return (
    <StepCard>
      <h2 ref={titleRef}>{engineeringSkills.title}</h2>
      <FormSelect
        name='programmingLanguages'
        label={engineeringSkills.programmingLanguages.question}
        isRequired={engineeringSkills.programmingLanguages.isRequired}
        options={engineeringSkills.programmingLanguages.choices}
        isMultipleChoices={true}
      />

      <FormSelect
        name='frameworks'
        label={engineeringSkills.frameworks.question}
        isRequired={engineeringSkills.frameworks.isRequired}
        options={engineeringSkills.frameworks.choices}
        isMultipleChoices={true}
      />

      <FormSelect
        name='cloudProviders'
        label={engineeringSkills.cloudProviders.question}
        isRequired={engineeringSkills.cloudProviders.isRequired}
        options={engineeringSkills.cloudProviders.choices}
        isMultipleChoices={true}
      />

      <FormSelect
        name='databases'
        label={engineeringSkills.databases.question}
        isRequired={engineeringSkills.databases.isRequired}
        options={engineeringSkills.databases.choices}
        isMultipleChoices={true}
      />

      <FormSelect
        name='technologies'
        label={engineeringSkills.technologies.question}
        isRequired={engineeringSkills.technologies.isRequired}
        options={engineeringSkills.technologies.choices}
        isMultipleChoices={true}
      />
      <Navigation
        onNext={() => {
          next(2)
        }}
        onBack={() => back()}
      />
    </StepCard>
  )
}
