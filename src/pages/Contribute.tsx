import { BaseComment, FormStep } from '@components'
import { getSurvey } from '@services'
import { Survey } from '@types'
import type { FormProps } from 'antd'
import { Button, Divider, Form } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'

const onFinish: FormProps<Survey>['onFinish'] = (values) => {
  console.log('Success:', values)
  // TODO: replace with Base_URL
  axios.post('http://localhost:8787' + '/survey', values).catch((error) => console.log(error))
}

const onFinishFailed: FormProps<Survey>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
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
        console.log(fetchedQuestions)
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
          {survey?.sections.map((section, i) => {
            return <FormStep section={section} key={i} />
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
