import { Typography } from 'antd'
import { Stats as StatsType } from '@types'
import '@styles/Stats.styles.scss'

interface StatsContainerProps extends StatsType {}

function formatNumber(num: number | undefined): string {
  if (!num) return ''
  if (num < 1000) {
    return num.toString()
  } else if (num < 1000000) {
    return Math.floor(num / 1000) + 'K'
  } else {
    return Math.floor(num / 1000000) + 'M'
  }
}
function formatNumberWithCommas(num: number | undefined): string {
  if (!num) return ''
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const StatsContainer = (props: StatsContainerProps) => {
  const { totalCount, median, p20Compensation, p75Compensation, p90Compensation } = props
  const currency = 'EGP'

  return (
    <div className='stats-outer-container'>
      <div className='stats-hero'>
        {median ? (
          <div className='stat hero'>
            <Typography.Text className='stat-label'>Median monthly pay</Typography.Text>
            <Typography.Text className='stat-value median'>
              {currency} {formatNumberWithCommas(median)}
            </Typography.Text>
          </div>
        ) : null}
        {totalCount ? (
          <div className='stat meta'>
            <Typography.Text className='stat-label'>Participants</Typography.Text>
            <Typography.Text className='stat-value'>
              {formatNumberWithCommas(totalCount)}
            </Typography.Text>
          </div>
        ) : null}
      </div>
      <div className='stats-divider' />
      <div className='stats-percentiles'>
        {p20Compensation ? (
          <div className='stat pill'>
            <div className='indicator p20'></div>
            <div>
              <Typography.Text className='stat-label'>20th percentile</Typography.Text>
              <Typography.Text className='stat-value'>
                {currency} {formatNumber(p20Compensation)}
              </Typography.Text>
            </div>
          </div>
        ) : null}
        {p75Compensation ? (
          <div className='stat pill'>
            <div className='indicator p75'></div>
            <div>
              <Typography.Text className='stat-label'>75th percentile</Typography.Text>
              <Typography.Text className='stat-value'>
                {currency} {formatNumber(p75Compensation)}
              </Typography.Text>
            </div>
          </div>
        ) : null}
        {p90Compensation ? (
          <div className='stat pill'>
            <div className='indicator p90'></div>
            <div>
              <Typography.Text className='stat-label'>90th percentile</Typography.Text>
              <Typography.Text className='stat-value'>
                {currency} {formatNumber(p90Compensation)}
              </Typography.Text>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
