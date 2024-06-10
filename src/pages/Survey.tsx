import type { FormProps } from 'antd'
import { Button, Checkbox, Divider, Form, Input, InputNumber, Radio } from 'antd'

type FieldType = {
  string?: string
  number?: string
  MCQ?: string
  checkbox: string
}

interface question {
  question: string
  name: string
  answerType: 'string' | 'number' | 'MCQ' | 'checkbox'
  choices?: string[]
  required: boolean
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const questionnaire: question[] = [
  {
    question: "You're a",
    name: 'gender',
    answerType: 'MCQ',
    choices: ['male', 'female'],
    required: true,
  },
  {
    question: 'How old are you?',
    name: '',
    answerType: 'number',
    choices: [],
    required: true,
  },
  {
    question: 'Do you have a computer science/engineering degree?',
    name: '',
    answerType: 'MCQ',
    choices: ['yes', 'no'],
    required: true,
  },
  {
    question: 'Your Linkedin Profile',
    name: '',
    answerType: 'string',
    choices: [],
    required: false,
  },
  {
    question: 'The industries of the business are',
    name: '',
    answerType: 'checkbox',
    choices: ['Fintech', 'Healthcare', 'Insurance', 'Automotive', 'Delivery'],
    required: true,
  },
]

function getQuestionInput(question: question) {
  switch (question.answerType) {
    case 'string':
      return <Input />
    case 'number':
      return <InputNumber />
    case 'MCQ':
      return (
        <Radio.Group>
          {question.choices?.map((choice, i) => {
            return (
              <Radio key={i} value={choice}>
                {choice}
              </Radio>
            )
          })}
        </Radio.Group>
      )
    case 'checkbox':
      return <Checkbox.Group options={question.choices} />
  }
}

export function Survey() {
  return (
    <div
      style={{
        width: '80%',
        marginBottom: '10px',
        marginTop: '20px',
      }}>
      <h1 className='header-text'>Survey</h1>
      <Divider />
      <Form
        layout='horizontal'
        name='basic'
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 4 }}
        labelWrap={true}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        {questionnaire.map((question, i) => {
          return (
            <Form.Item
              style={{ textAlign: 'left' }}
              key={i}
              label={question.question}
              name={question.name}
              rules={[{ required: question.required, message: 'Please input your username!' }]}>
              {getQuestionInput(question)}
            </Form.Item>
          )
        })}

        <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
