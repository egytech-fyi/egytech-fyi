import { BaseComment } from '@components'
import { useGlobalState } from '@context'
import { Stats as StatsType } from '@types'

interface SalaryCommentProps extends StatsType {}

export const SalaryComment = (props: SalaryCommentProps) => {
  const { median, p20Compensation, p75Compensation, p90Compensation } = props

  const { state } = useGlobalState()

  let comment
  if (state.salary && median && p20Compensation && p75Compensation && p90Compensation) {
    if (state.salary < p20Compensation) {
      comment = `You are in the lower range of salaries. 80% of the participants earn more than you. Try using more filters to narrow the result to participants with the same criteria as you 🔍`
    } else if (state.salary < median) {
      comment = `You are in the lower range of salaries. 50% of the participants earn more than you. Try using more filters to narrow the result to participants with the same criteria as you 🔍`
    } else if (state.salary < p75Compensation) {
      comment = `You are in the upper range of salaries, earning more than 50% of the partcipants. Good job! 👏`
    } else if (state.salary < p90Compensation) {
      comment = `You are in the upper range of salaries, earning more than 75% of the partcipants. Great job! 👏`
    } else {
      comment = 'You earn more than 90% of the participants who took the survey. Bravo! 🚀'
    }
  }

  return <BaseComment hidden={!(state.salary && median)}>{comment}</BaseComment>
}
