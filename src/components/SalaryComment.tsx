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
      comment = `You are in the lower range of salaries. 80% of participants earn more than you. Use filters to narrow the comparison to peers with similar criteria.`
    } else if (state.salary < median) {
      comment = `You are in the lower range of salaries. 50% of participants earn more than you. Use filters to narrow the comparison to peers with similar criteria.`
    } else if (state.salary < p75Compensation) {
      comment = `You are in the upper range of salaries, earning more than 50% of participants.`
    } else if (state.salary < p90Compensation) {
      comment = `You are in the upper range of salaries, earning more than 75% of participants.`
    } else {
      comment = 'You earn more than 90% of participants who took the survey.'
    }
  }

  return <BaseComment hidden={!(state.salary && median)}>{comment}</BaseComment>
}
