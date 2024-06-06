import { Button } from 'antd'
import { StatsContainer, SalaryComment, NoData, StepCard } from '@components'
import { useGlobalState } from '@context'
import { useGetStats } from '@services'
import '@styles/StatsCard.styles.scss'

export const StatsCard = () => {
  const { state } = useGlobalState()

  const { data: stats, status } = useGetStats(
    { ...state },
    { enabled: Boolean(state.title) && Boolean(state.salary) },
  )

  if (status !== 'success') return null

  if (!stats.stats.totalCount || stats.stats.totalCount < 3) {
    return (
      <StepCard>
        <NoData />
      </StepCard>
    )
  }

  return (
    <StepCard>
      <StatsContainer {...stats?.stats} />
      <div className='salary-comment-container'>
        <SalaryComment {...stats?.stats} />
      </div>
      <Button
        type='primary'
        size='large'
        href='https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform?usp=sf_link'
        target='_blank'>
        💪 Contribute Your Salary Now
      </Button>
    </StepCard>
  )
}
