import { Divider, Button } from 'antd'
import { Link } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import logo from '/symbol.svg'
import '@styles/LandingPage.styles.scss'
import '@styles/SharedComponents.styles.scss'

const CurrencySalariesChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [10, 10, 10, 10],
    },
    title: {
      text: 'Average Engineering Salaries with 3-5 Years of Experience',
    },
    xAxis: {
      categories: ['2017', '2021', '2022', '2024'],
      crosshair: true,
    },
    yAxis: [
      {
        title: {
          text: 'Salary in Thousands (EGP)',
        },
        labels: {
          format: '{value}K',
        },
      },
      {
        title: {
          text: 'USD/EGP Exchange Rate',
        },
        labels: {
          format: '{value} EGP',
        },
        opposite: true,
      },
    ],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Software Engineers',
        type: 'column',
        data: [13.7, 17.3, 18.6, 53.1],
      },
      {
        name: 'USD/EGP Exchange Rate',
        type: 'line',
        yAxis: 1,
        data: [18, 15, 20, 48],
        tooltip: {
          valueSuffix: ' EGP',
        },
      },
    ],
  }

  return (
    <div style={{ width: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export const LandingPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className='landing-hero'>
        <div>
          <div className='landing-logo'>
            <img src={logo} alt='Egypt Tech Scene' />
            <span>Egyptian Tech Scene</span>
          </div>
          <h1 className='landing-title'>Clear, credible salary signals for Egypt's tech market.</h1>
          <p className='landing-subtitle'>
            The Egyptian Tech Scene report and dashboard translate 2024 survey data into clear
            market benchmarks.
          </p>
          <div className='landing-actions'>
            <Link to='/dashboard'>
              <Button type='primary'>Open Salary Explorer</Button>
            </Link>
            <Link to='/report'>
              <Button type='default'>Read the 2024 report</Button>
            </Link>
          </div>
          <div className='landing-highlight-grid'>
            <div className='landing-highlight'>
              <strong>2,649</strong>
              <span>Salary responses</span>
            </div>
            <div className='landing-highlight'>
              <strong>Apr-Jul 2024</strong>
              <span>Collection window</span>
            </div>
            <div className='landing-highlight'>
              <strong>Nationwide</strong>
              <span>Local, regional, and global firms</span>
            </div>
          </div>
        </div>
        <div className='landing-chart-card'>
          <CurrencySalariesChart />
        </div>
      </div>

      <div className='landing-section'>
        <div className='landing-card-grid'>
          <div className='landing-card'>
            <h4>Why salaries feel stuck</h4>
            <p>
              Compensation rose, but EGP devaluation erased gains. See how purchasing power shifted
              year over year.
            </p>
            <Link to='/report'>
              <Button type='default'>Read the story</Button>
            </Link>
          </div>
          <div className='landing-card'>
            <h4>See your market position</h4>
            <p>
              Use the explorer to compare your salary with peers by role, level, and company
              profile.
            </p>
            <Link to='/dashboard'>
              <Button type='default'>Open Salary Explorer</Button>
            </Link>
          </div>
          <div className='landing-card'>
            <h4>Help keep the data fresh</h4>
            <p>More responses mean better benchmarks. Add your data to the next update.</p>
            <Button
              type='default'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform'
              target='_blank'>
              Contribute your salary
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  )
}
