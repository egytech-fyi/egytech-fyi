export const HISTOGRAM_OPTIONS: Highcharts.Options = {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Salary Distribution',
    style: { color: 'var(--color-ink)', fontFamily: 'var(--font-display)' },
  },
  subtitle: {
    text: 'Where your salary sits in the 2024 dataset',
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
      text: 'Number of Participants',
      style: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' },
    },
    labels: { style: { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' } },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: 'Number of Participants: <b>{point.y}</b>',
  },
}

export const SERIES_STATIC_OPTIONS = {
  colorByPoint: true,
  groupPadding: 0,

  dataLabels: {
    enabled: true,
    color: '#ffffff',
    rotation: -90,
    inside: false,
    verticalAlign: 'top',
    format: '{point.y}', // one decimal
    y: 10, // 10 pixels down from the top
    style: {
      fontSize: '13px',
      fontFamily: 'var(--font-body)',
    },
  },
}
