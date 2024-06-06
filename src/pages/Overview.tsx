import { Button, Divider } from 'antd'
import { Link } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { StepCard, BaseComment } from '@components'
import '@styles/MainContainer.styles.scss'
import '@styles/SharedComponents.styles.scss'

const GenderPieChart = () => {
  const malePercentage: number = 77.6
  const femalePercentage: number = 22.4
  const maleCount: number = 1341
  const femaleCount: number = 388

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        if (this.point.name === 'Male') {
          return (
            '<b>Male</b>: ' + maleCount + ' (' + Highcharts.numberFormat(this.percentage, 1) + '%)'
          )
        } else if (this.point.name === 'Female') {
          return (
            '<b>Female</b>: ' +
            femaleCount +
            ' (' +
            Highcharts.numberFormat(this.percentage, 1) +
            '%)'
          )
        } else {
          return (
            '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
          )
        }
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Gender',
        data: [
          {
            name: 'Male',
            y: malePercentage,
          },
          {
            name: 'Female',
            y: femalePercentage,
          },
        ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const ComputerSciencePieChart = () => {
  const YesPercentage: number = 78.5
  const NoPercentage: number = 21.5
  const YesCount: number = 1358
  const NoCount: number = 371

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        if (this.point.name === 'Yes') {
          return (
            '<b>Yes</b>: ' + YesCount + ' (' + Highcharts.numberFormat(this.percentage, 1) + '%)'
          )
        } else if (this.point.name === 'No') {
          return '<b>No</b>: ' + NoCount + ' (' + Highcharts.numberFormat(this.percentage, 1) + '%)'
        } else {
          return (
            '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
          )
        }
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: [
          {
            name: 'Yes',
            y: YesPercentage,
          },
          {
            name: 'No',
            y: NoPercentage,
          },
        ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const TitlePieChart = () => {
  const titleData = [
    {
      name: 'Backend',
      y: 24.2,
    },
    {
      name: 'Frontend',
      y: 11.5,
    },
    {
      name: 'Fullstack',
      y: 18,
    },
    {
      name: 'QA/SDET',
      y: 4.6,
    },
    {
      name: 'Mobile',
      y: 7.3,
    },
    {
      name: 'DevOps/SRE/Platform',
      y: 4.6,
    },
    {
      name: 'Data Scientist',
      y: 2.8,
    },
    {
      name: 'Data Engineer',
      y: 2.7,
    },
    {
      name: 'Data Analytics',
      y: 4.3,
    },
    {
      name: 'Engineering Manager',
      y: 1.2,
    },
    {
      name: 'Executive',
      y: 0.5,
    },
    {
      name: 'Systems Architec',
      y: 0.9,
    },
    {
      name: 'Embedded Systems',
      y: 2.7,
    },
    {
      name: 'R&D',
      y: 1.8,
    },
    {
      name: 'AI & Automation',
      y: 0.9,
    },
    {
      name: 'UI & UX',
      y: 2.1,
    },
    {
      name: 'Hardware',
      y: 0.3,
    },
    {
      name: 'Product Owner',
      y: 1.8,
    },
    {
      name: 'Product Manager',
      y: 2.9,
    },
    {
      name: 'Scrum Master',
      y: 0.3,
    },
    {
      name: 'Security/Networks',
      y: 2,
    },
    {
      name: 'Technical Support',
      y: 2.3,
    },
    {
      name: 'CRM Developer',
      y: 0.4,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const LevelPieChart = () => {
  const titleData = [
    {
      name: 'Intern',
      y: 0.2,
    },
    {
      name: 'Junior',
      y: 38.3,
    },
    {
      name: 'Mid-level',
      y: 29.7,
    },
    {
      name: 'Senior',
      y: 22.6,
    },
    {
      name: 'Team Lead',
      y: 3.9,
    },
    {
      name: 'Staff',
      y: 1.1,
    },
    {
      name: 'Senior Staff',
      y: 0.5,
    },
    {
      name: 'Principal',
      y: 0.5,
    },
    {
      name: 'Group Product Manager',
      y: 0.2,
    },
    {
      name: 'Head of Products',
      y: 0.1,
    },
    {
      name: 'Senior Principal',
      y: 0.1,
    },
    {
      name: 'Manager',
      y: 1.6,
    },
    {
      name: 'Senior Manager',
      y: 0.2,
    },
    {
      name: 'Director',
      y: 0.2,
    },
    {
      name: 'Group Director',
      y: 1.8,
    },
    {
      name: 'VP',
      y: 0.1,
    },
    {
      name: 'CXO',
      y: 0.3,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const WorkSettingPieChart = () => {
  const titleData = [
    {
      name: 'Hybrid',
      y: 44,
    },
    {
      name: 'Remote/Egypt',
      y: 18.7,
    },
    {
      name: 'Remote/Abroad',
      y: 18.1,
    },
    {
      name: 'Office',
      y: 16.6,
    },
    {
      name: 'Relocated',
      y: 2.6,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const CompanySizePieChart = () => {
  const titleData = [
    {
      name: 'SME',
      y: 34.5,
    },
    {
      name: 'Large Enterprise / Corporation',
      y: 33.7,
    },
    {
      name: 'Start-up',
      y: 31.8,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const CompanyMarketPieChart = () => {
  const titleData = [
    {
      name: 'Local',
      y: 16.5,
    },
    {
      name: 'Regional',
      y: 39.4,
    },
    {
      name: 'Global',
      y: 44.1,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const CompanyLocationPieChart = () => {
  const titleData = [
    {
      name: 'Cairo',
      y: 74,
    },
    {
      name: 'Alexandria',
      y: 4.9,
    },
    {
      name: 'No office in Egypt',
      y: 15.2,
    },
    {
      name: 'Others',
      y: 5.9,
    },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent', // Make chart background transparent
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + '%'
        )
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie', // Explicitly define the type as 'pie'
        name: 'Participant',
        data: titleData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export const Overview = () => {
  return (
    <div>
      <div
        id='overview'
        style={{
          width: '100%',
          marginBottom: '10px',
          marginTop: '20px',
        }}>
        <div className='header-subtext'>
          <h2>
            {' '}
            <b>Overview 🔍</b>{' '}
          </h2>
        </div>
        <div className='salary-comment-container'>
          <BaseComment>
            This year, we got 1,729 responses, a 33% jump from last time when we got around 1,300.
            About 1,650 were valid, and roughly 1,200 were verified, where participants shared their
            company names or personal info!
            <br />
            <br />
            Here we're exploring the analysis of these answers. If you prefer to compare your salary
            with others first then
            <br />
            <br />
            <Link to='/dashboard'>
              <Button type='default'>Access Our Salary Dashboard 💸</Button>
            </Link>
            <br />
          </BaseComment>
        </div>
      </div>
      <Divider />
      <div id='gender' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              Among the participants, 388 were from females, and 1,341 were from males 🎉
            </BaseComment>
          </div>
          <GenderPieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='title' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              The majority of participants had an engineering background, with over 50% specializing
              in Backend, Frontend, or Fullstack development.
            </BaseComment>
          </div>
          <TitlePieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='degree' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              Of these participants, 1,358 held a Computer Science related degree, while 371 did
              not.
            </BaseComment>
          </div>
          <ComputerSciencePieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='level' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              For the third year, we haven't had many participants in higher level. <br />
              Only 10% of the participants were in levels higher than Senior Level.
            </BaseComment>
          </div>
          <LevelPieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='work-setting' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              In 2022, 14.4% of participants from Egypt worked remotely for overseas companies. This
              year, that figure has risen to 18.1%.
            </BaseComment>
          </div>
          <WorkSettingPieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='company-size' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              The majority of the participants are working in Small and Medium Enterprises. <br />
            </BaseComment>
          </div>
          <CompanySizePieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='company-market' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              The majority of the participants are working in Global Markets. <br />
            </BaseComment>
          </div>
          <CompanyMarketPieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='location' style={{ width: '100%', marginBottom: '20px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              As expected, 74% of participants working in comapnies located in Cairo!. <br />
            </BaseComment>
          </div>
          <CompanyLocationPieChart />
        </StepCard>
      </div>
      <Divider />
    </div>
  )
}
