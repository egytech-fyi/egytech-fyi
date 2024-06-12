import { BaseComment } from '@components'
import { BASE_URL, getSurvey } from '@services'
import { Question, QuestionType, Survey } from '@types'
import type { FormProps } from 'antd'
import { Button, Checkbox, Divider, Form, Input, InputNumber, Radio } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'

const onFinish: FormProps<QuestionType>['onFinish'] = (values) => {
  console.log('Success:', values)
  axios.post(BASE_URL + '/survey', values).catch((error) => console.log(error))
}

const onFinishFailed: FormProps<QuestionType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

function getQuestionInput(question: Question) {
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
      return <Input prefix='https://' type='URL' />
  }
}

export function Contribute() {
  const [survey, setSurvey] = useState<Survey>()
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      // setError(null);
      try {
        const fetchedQuestions = await getSurvey()
        setSurvey(fetchedQuestions)
      } catch (err) {
        console.log(err)
        // setError(err);
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div
      className='main-container'
      style={{
        width: '80%',
        marginBottom: '10px',
        marginTop: '20px',
      }}>
      <h1 className='header-text'>Survey</h1>
      <BaseComment>
        <span>
          This survey is designed to gather valuable insights from you in the most efficient way
          possible. By keeping the number of questions concise, we can ensure the survey takes
          approximately 12 minutes to complete.{' '}
          <strong>Some sections may be skipped depending on your job role</strong>. Your
          participation and willingness to help others in the Egyptian tech market are greatly
          appreciated.
        </span>
      </BaseComment>
      <Divider />
      {!isLoading && (
        <Form
          layout='horizontal'
          name='survey'
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 4 }}
          labelWrap={true}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          {survey?.sections.map((section) => {
            return survey[section as keyof typeof survey].map((question, i) => {
              question = question as Question
              return (
                <Form.Item
                  style={{ textAlign: 'left' }}
                  key={i}
                  label={question.question}
                  name={`general_questions_${i}`}
                  rules={[{ required: question.isRequired, message: 'This field is required' }]}>
                  {getQuestionInput(question)}
                </Form.Item>
              )
            })
          })}

          <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  )
}
