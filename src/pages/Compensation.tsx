import { BaseComment, GraphCard, MainFilters, StatsCard } from '@components'
import { Divider } from 'antd'
import '@styles/MainContainer.styles.scss'

export const Compensation = () => {
  return (
    <div>
      <h1 className='header-text'>Dashboard! 💸</h1>
      <Divider />
      <main className='main-container'>
        <div className='salary-comment-container'>
          <BaseComment>
            <span>
              This year, we've crafted an awesome dashboard to help you pinpoint your spot in the
              market and see how salaries stack up among participants. Once you've added your job
              title and salary, you'll unlock a treasure trove of filters to fine-tune your search
              and discover your true market value! 💼✨
            </span>
            <br />
            <br />
            <span>
              We don't store your answers, so be true to yourself for the best experience. 📝
            </span>
          </BaseComment>
        </div>
        <MainFilters />
        <div className='content-container'>
          <StatsCard />
          <GraphCard type='histogram' />
          <GraphCard type='spline' />
        </div>
      </main>
    </div>
  )
}
