import { Footer, Navbar } from '@components'
import { GlobalStateProvider } from '@context'
import { Compensation, Contribute, LandingPage } from '@pages'
import '@styles/App.styles.scss'
import { Layout, Spin } from 'antd'
import Highcharts from 'highcharts'
import HighchartsAccessibility from 'highcharts/modules/accessibility'
import { Suspense, lazy, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom'

// Initialize the accessibility module
HighchartsAccessibility(Highcharts)
Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--color-ink)',
    },
  },
  title: {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--color-ink)',
    },
  },
  subtitle: {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--color-muted)',
    },
  },
  xAxis: {
    labels: {
      style: {
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      },
    },
    title: {
      style: {
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      },
    },
    title: {
      style: {
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      },
    },
  },
  legend: {
    itemStyle: {
      color: 'var(--color-muted)',
      fontFamily: 'var(--font-body)',
    },
  },
})

const Insights = lazy(() =>
  import('./pages/Insights').then((module) => ({ default: module.Insights })),
)

const { Content } = Layout

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry() {
        return false
      },
    },
  },
})

function App() {
  const [visible, setVisible] = useState(false)
  function showDrawer() {
    setVisible(true)
  }
  function handleCloseDrawer() {
    setVisible(false)
  }

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalStateProvider>
          <Navbar handleOpenDrawer={showDrawer} />
          <Content>
            <div className='app-container'>
              <Suspense fallback={<Spin size='large' style={{ margin: 'auto' }} />}>
                <Switch>
                  <Route path='/' element={<LandingPage />} />
                  <Route
                    path='/report'
                    element={<Insights drawerOpen={visible} onDrawerClose={handleCloseDrawer} />}
                  />
                  <Route path='/dashboard' element={<Compensation />} />
                  <Route path='/contribute' element={<Contribute />} />
                </Switch>
              </Suspense>
              <Footer />
            </div>
          </Content>
        </GlobalStateProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default App
