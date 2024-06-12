import { Question, QuestionType, Section } from '@types'
import { Checkbox, Form, Input, InputNumber, Radio } from 'antd'

function getInputField(question: Question) {
  switch (question.type) {
    case QuestionType.STRING:
      return <Input />
    case QuestionType.NUMBER:
      return <InputNumber />
    case QuestionType.MCQ:
      return (
        <Radio.Group>
          {question.choices?.map((choice, i) => {
            if (choice.startsWith('Other:')) return <Input key={i} placeholder='Other' />
            return (
              <Radio key={i} value={choice}>
                {choice}
              </Radio>
            )
          })}
        </Radio.Group>
      )
    case QuestionType.CHECKBOX:
      return <Checkbox.Group options={question.choices} />
    case QuestionType.URL:
      return <Input type='URL' />
    default:
      return null
  }
}

interface FormStepProps {
  section: Section
}
// A single step in a multi-step form
export function FormStep({ section }: FormStepProps) {
  return (
    <div>
      <h2>{section.title}</h2>
      {section.questions.map((value, i) => {
        const question = value as Question
        return (
          <Form.Item
            style={{ textAlign: 'left' }}
            key={i}
            label={question.question}
            name={`${section.title.replace(' ', '_').replace(/[()]/g, '')}_${i}`} // set field name to section_title_index
            rules={[{ required: question.isRequired }]}>
            {getInputField(question)}
          </Form.Item>
        )
      })}
    </div>
  )
}
