export const SPLINE_OPTIONS: Highcharts.Options = {
  chart: {
    type: 'spline',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Gender Salary Comparison',
    style: { color: 'var(--color-ink)', fontFamily: 'var(--font-display)' },
  },
  subtitle: {
    text: 'Comparing distribution shapes by gender',
    style: { color: 'var(--color-muted)', fontSize: '14px', fontFamily: 'var(--font-body)' },
    useHTML: true,
  },
  xAxis: {
    type: 'category',
    labels: {
      autoRotation: [-45, -90],
      style: {
        fontSize: '13px',
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      },
    },
    title: {
      text: 'Total Monthly Net Salary in EGP (Basic + Bonus)',
      style: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage (%) of Participants',
      style: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' },
    },
    labels: {
      style: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' },
      format: '{value:,.0f}%',
    },
  },
  legend: {
    enabled: true,
    align: 'right',
    verticalAlign: 'top',
    itemStyle: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' },
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      type: 'spline',
      name: 'Tokyo',
      marker: {
        symbol: 'square',
      },
      data: [
        5.2,
        5.7,
        8.7,
        13.9,
        18.2,
        21.4,
        25.0,
        {
          y: 26.4,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
          },
          accessibility: {
            description: 'Sunny symbol, this is the warmest point in the chart.',
          },
        },
        22.8,
        17.5,
        12.1,
        7.6,
      ],
    },
    {
      type: 'spline',
      name: 'Bergen',
      legendSymbol: 'lineMarker',
      legendIndex: 1,
      marker: {
        symbol: 'diamond',
      },
      data: [
        {
          y: 1.5,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)',
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.',
          },
        },
        1.6,
        3.3,
        5.9,
        10.5,
        13.5,
        14.5,
        14.4,
        11.5,
        8.7,
        4.7,
        2.6,
      ],
    },
  ],
}
