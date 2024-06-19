import { Button, Form } from 'antd'

interface NavigationProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  numSteps: number
  onNext: () => void
  onBack: () => void
}

export function Navigation({ currentStep, numSteps, onBack }: NavigationProps) {
  return (
    <div className='survey-buttons'>
      <Form.Item>
        {currentStep > 0 && (
          <Button type='primary' className='survey-back' onClick={onBack}>
            Back
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        {currentStep < numSteps && (
          <Button type='primary' className='survey-next' htmlType='submit'>
            Next
          </Button>
        )}
      </Form.Item>
      <Form.Item>{currentStep == numSteps - 1 && <Button type='primary'>Submit</Button>}</Form.Item>
    </div>
  )
}
