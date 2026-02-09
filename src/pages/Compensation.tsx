import { BaseComment, GraphCard, MainFilters, StatsCard } from '@components'
import { Divider } from 'antd'
import '@styles/MainContainer.styles.scss'
import { useGlobalState } from '@context'

export const Compensation = () => {
  const { state } = useGlobalState()
  const hasCoreInputs = Boolean(state.title?.length) && Boolean(state.salary)

  return (
    <div className='dashboard-shell'>
      <div className='dashboard-hero'>
        <h1 className='dashboard-hero-title'>Salary Explorer</h1>
        <p className='dashboard-hero-subtitle'>
          Compare your salary against peers by role, level, and company profile. Built from 2,649
          Egyptian Tech Scene salary responses collected Apr-Jul 2024.
        </p>
        <div className='dashboard-steps'>
          <div className='dashboard-step'>1. Add your role and monthly net salary.</div>
          <div className='dashboard-step'>2. Refine filters to match your profile.</div>
          <div className='dashboard-step'>3. See your position in the market.</div>
        </div>
      </div>
      <Divider />
      <main className='main-container'>
        <div className='dashboard-note'>
          <BaseComment>
            Enter your role and net salary to unlock the market view. Your inputs stay on your
            device.
          </BaseComment>
        </div>
        <MainFilters />
        {!hasCoreInputs ? (
          <div className='dashboard-note'>
            <BaseComment>
              We only show results when there is enough data for a meaningful comparison.
            </BaseComment>
          </div>
        ) : null}
        <div className='content-container'>
          <StatsCard />
          <GraphCard type='histogram' />
          <GraphCard type='spline' />
        </div>
      </main>
    </div>
  )
}
