import { Button, Form } from 'antd'

interface NavigationProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  isLast: boolean
  isFormValid: boolean
  trigger: () => void
}

export function Navigation({
  currentStep,
  setCurrentStep,
  isLast,
  isFormValid,
  trigger,
}: NavigationProps) {
  async function onNextStep() {
    await trigger() // validate form values
    if (isFormValid) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className='survey-buttons'>
      <Form.Item>
        {currentStep != 0 && (
          <Button
            type='primary'
            className='survey-back'
            onClick={() => setCurrentStep(currentStep - 1)}>
            Back
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        {!isLast && (
          <Button type='primary' className='survey-next' onClick={onNextStep}>
            Next
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        {isLast && (
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        )}
      </Form.Item>
    </div>
  )
}
