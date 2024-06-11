import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from 'antd'
import { Footer, Navbar } from '@components'
import { GlobalStateProvider } from '@context'
import { LandingPage, Compensation, Insights } from '@pages'
import '@styles/App.styles.scss'
import { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsAccessibility from 'highcharts/modules/accessibility'

// Initialize the accessibility module
HighchartsAccessibility(Highcharts)

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
              <Switch>
                <Route path='/' element={<LandingPage />} />
                <Route
                  path='/report'
                  element={<Insights drawerOpen={visible} onDrawerClose={handleCloseDrawer} />}
                />
                <Route path='/dashboard' element={<Compensation />} />
              </Switch>
              <Footer />
            </div>
          </Content>
        </GlobalStateProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default App
