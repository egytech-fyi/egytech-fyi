import { Button, Form } from 'antd'

interface NavigationProps {
  onNext?: () => void
  onBack?: () => void
  submit?: boolean
}

export function Navigation({ onNext, onBack, submit }: NavigationProps) {
  return (
    <div className='survey-buttons'>
      <Form.Item>
        {onBack && (
          <Button type='primary' className='survey-back' onClick={onBack}>
            Back
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        {onNext && (
          <Button type='primary' className='survey-next' onClick={onNext}>
            Next
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        {submit && (
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        )}
      </Form.Item>
    </div>
  )
}
