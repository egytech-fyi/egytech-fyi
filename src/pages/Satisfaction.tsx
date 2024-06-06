import { Divider } from 'antd'
import Highcharts, { SeriesOptionsType } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { StepCard, BaseComment } from '@components'
import '@styles/MainContainer.styles.scss'
import '@styles/SharedComponents.styles.scss'

const SalaryIncreasePieChart = () => {
  const titleData = [
    {
      name: 'A new hire',
      y: 29.5,
    },
    {
      name: 'Less than 3 months',
      y: 37.9,
    },
    {
      name: 'Less than 6 months',
      y: 15.1,
    },
    {
      name: 'Less than a year',
      y: 9.6,
    },
    {
      name: 'More than a year',
      y: 7.9,
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
        name: 'Pricing',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const SalarySatisfactionPieChart = () => {
  const titleData = [
    {
      name: 'Yes',
      y: 30.3,
    },
    {
      name: 'I should earn more',
      y: 54.2,
    },
    {
      name: 'I should earn less',
      y: 1.6,
    },
    {
      name: 'Not sure',
      y: 13.9,
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
        name: 'Pricing',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const SalarySatisfactionBarChart = () => {
  const data = [
    { category: 'Yes', males: 30.7, females: 27.4 },
    { category: 'No, I should earn more', males: 55.3, females: 52.5 },
    { category: 'No, I should earn less', males: 1.8, females: 1.4 },
    { category: 'Not sure', males: 12.2, females: 18.7 },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Salary Satisfaction by Gender',
    },
    xAxis: {
      categories: data.map((item) => item.category),
      title: {
        text: 'Answers',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage of Responses',
      },
      labels: {
        formatter: function () {
          return this.value + '%'
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}%</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Males 👨🏻',
        data: data.map((item) => item.males),
      },
      {
        name: 'Females 👩🏻',
        data: data.map((item) => item.females),
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const LevelSatisfactionBarChart = () => {
  const data = [
    { category: 'Yes', males: 62.1, females: 60.7 },
    {
      category: 'No, I should be in a higher level',
      males: 25.6,
      females: 22.2,
    },
    {
      category: 'No, I should be in a lesser level',
      males: 3.0,
      females: 2.0,
    },
    { category: 'Not sure', males: 9.4, females: 15.2 },
  ]

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Level Satisfaction by Gender',
    },
    xAxis: {
      categories: data.map((item) => item.category),
      title: {
        text: 'Answers',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage of Responses',
      },
      labels: {
        formatter: function () {
          return this.value + '%'
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}%</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Males 👨🏻',
        data: data.map((item) => item.males),
      },
      {
        name: 'Females 👩🏻',
        data: data.map((item) => item.females),
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const ValuePieChart = () => {
  const titleData = [
    {
      name: 'Yes',
      y: 69.2,
    },
    {
      name: 'No',
      y: 19.4,
    },
    {
      name: 'Do not Care. Here for the $',
      y: 11.4,
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
        name: 'value',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const LearningPieChart = () => {
  const titleData = [
    {
      name: 'Yes',
      y: 60.4,
    },
    {
      name: 'Sometimes',
      y: 29.9,
    },
    {
      name: 'No',
      y: 9.7,
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
        name: 'learning',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const PreferredWorkplacePieChart = () => {
  const titleData = [
    {
      name: 'Hybrid',
      y: 71.5,
    },
    {
      name: 'Remote',
      y: 24.4,
    },
    {
      name: 'Office',
      y: 4.1,
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
        name: 'workplace',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const CurrencyPieChart = () => {
  const titleData = [
    {
      name: 'EGP',
      y: 67.7,
    },
    {
      name: 'Other Currency (e.g $)',
      y: 28.9,
    },
    {
      name: 'Hybrid',
      y: 3.4,
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

const SameCompanyPieChart = () => {
  const titleData = [
    {
      name: 'Yes',
      y: 62.1,
    },
    {
      name: 'No',
      y: 37.9,
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
        name: 'value',
        data: titleData,
      },
    ] as SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

const CurrencySalariesChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacing: [10, 10, 10, 10],
    },
    title: {
      text: 'Average Tech Salaries with 3-5 Years of Experience',
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
        name: 'Backend Engineer',
        type: 'column',
        data: [14, 18, 20, 57.3],
      },
      {
        name: 'Frontend Engineer',
        type: 'column',
        data: [14, 17.3, 18.3, 49.3],
      },
      {
        name: 'Fullstack Engineer',
        type: 'column',
        data: [13.3, 16.7, 17.7, 52.8],
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

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export const Satisfaction = () => {
  return (
    <div>
      <div id='satisfaction' style={{ width: '100%', marginBottom: '10px' }}>
        <div className='header-subtext'>
          <h2>
            {' '}
            <b>Satisfaction! 😠🥰 </b>{' '}
          </h2>
        </div>
        <div className='salary-comment-container'>
          <BaseComment>
            We specifically inquired about the participants' most recent salary increments,
            particularly in light of currency devaluation. 💷 <br />
          </BaseComment>
        </div>
      </div>
      <div id='salary-increase' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>Almost 40% had a salary increase in the last 3 months</BaseComment>
          </div>
          <SalaryIncreasePieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='same-company' style={{ width: '100%', marginBottom: '10px' }}>
        <div className='salary-comment-container'>
          <BaseComment>
            We asked the participants if they have been working in the same company for the past
            year <br />
          </BaseComment>
        </div>
      </div>

      <div style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              Around 37% of the participants with more than one year of experience, changed
              companies this past year! 🤝🏼
            </BaseComment>
          </div>
          <SameCompanyPieChart />
        </StepCard>
      </div>
      <Divider />

      <div id='salaries-rise-with-currencies' style={{ width: '100%', marginBottom: '10px' }}>
        <div className='salary-comment-container'>
          <BaseComment>
            We wanted to know how to tech salaries are moving with currency devaluation, using
            Egyptian Geeks 2017 report and our reports from previous years. <br />
          </BaseComment>
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              Although tech salaries have risen, they are barely keeping pace with the devaluation
              of the Egyptian pound. 💵 <br />
            </BaseComment>
          </div>
          <CurrencySalariesChart />
        </StepCard>
      </div>

      <Divider />

      <div id='currencies' style={{ width: '100%', marginBottom: '10px' }}>
        <div className='salary-comment-container'>
          <BaseComment>
            We wanted to know the percentage of the participants who receive their salaries in
            another currency. <br />
          </BaseComment>
        </div>
      </div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              The number of participants receiving their salaries in currencies other than EGP is
              growing. 💵 <br />
            </BaseComment>
          </div>
          <CurrencyPieChart />
        </StepCard>
      </div>
      <Divider />
      <div id='salary-satisfaction' style={{ width: '100%', marginBottom: '10px' }}>
        <div className='salary-comment-container'>
          <BaseComment>
            We asked the participants about their salary satisfaction 😊 <br />
          </BaseComment>
        </div>
      </div>

      <div style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>More than 50% thought they should earn more</BaseComment>
          </div>
          <SalarySatisfactionPieChart />
        </StepCard>
      </div>

      <Divider />
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              We wanted to see the gender distribution between these answers 👩🏽 👨🏼
            </BaseComment>
          </div>
          <SalarySatisfactionBarChart />
        </StepCard>
      </div>
      <Divider />
      <div id='level-satisfaction' style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div className='salary-comment-container'>
            <BaseComment>
              More 61% of the participants think they are placed in the level they deserve 🎉
            </BaseComment>
          </div>
          <LevelSatisfactionBarChart />
        </StepCard>
      </div>
      <Divider />
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <StepCard>
          <div id='value' className='salary-comment-container'>
            <BaseComment>The majority of participants find value in their work ❤️</BaseComment>
          </div>
          <ValuePieChart />
        </StepCard>
        <Divider />
        <StepCard>
          <div id='learning' className='salary-comment-container'>
            <BaseComment>
              The majority also think they have the opportunity to learn new stuff! 📚
            </BaseComment>
          </div>
          <LearningPieChart />
        </StepCard>
      </div>
      <Divider />
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <StepCard>
          <div id='preferred-work-setting' className='salary-comment-container'>
            <BaseComment>
              This year, 71% of the participants expressed a preference for a hybrid work setting.
              That's a significant surge from 63% back in 2022! 🏢 🏠
            </BaseComment>
          </div>
          <PreferredWorkplacePieChart />
        </StepCard>
      </div>
    </div>
  )
}
