import { Footer, Navbar } from '@components'
import { GlobalStateProvider } from '@context'
import { Compensation, Contribute, Insights, LandingPage } from '@pages'
import '@styles/App.styles.scss'
import { Layout } from 'antd'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom'

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
                <Route path='/contribute' element={<Contribute />} />
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
