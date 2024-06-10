import { useEffect } from 'react'
import { Button, Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { FundTwoTone, DollarTwoTone, MenuOutlined, PlusCircleTwoTone } from '@ant-design/icons'
import logo from '/symbol.svg'
import '@styles/Navbar.styles.scss'

const { Header } = Layout

const pageTitleMap: { [key: string]: string } = {
  '/': 'Ace Your Next Tech Offer Negotiation | egytech.fyi',
  '/report': 'Egyptian Tech Scene 2024 | egytech.fyi',
  '/dashboard': 'Compare Your Salary | egytech.fyi',
}

interface NavbarProps {
  handleOpenDrawer: () => void
}

export const Navbar = ({ handleOpenDrawer }: NavbarProps) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitleMap[location.pathname] || 'egytech.fyi'
  }, [location.pathname])

  const isReport = location.pathname === '/report'

  return (
    <Header className='navbar-header'>
      <Menu
        theme='light'
        mode='horizontal'
        selectedKeys={[location.pathname]}
        className='navbar-menu'>
        <Menu.Item className='navbar-menu-item' key='/'>
          <Link to='/'>
            <img src={logo} alt='Egypt Tech Scene Logo' className='navbar-logo' />
          </Link>
        </Menu.Item>
        <Menu.Item
          className='navbar-menu-item'
          key='/dashboard'
          icon={<DollarTwoTone twoToneColor='#4c88ef' />}>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          className='navbar-menu-item'
          key='/report'
          icon={<FundTwoTone twoToneColor='#4c88ef' />}>
          <Link to='/report'>Report</Link>
        </Menu.Item>
        <Menu.Item
          className='navbar-menu-item'
          key='/survey'
          icon={<PlusCircleTwoTone twoToneColor='#4c88ef' />}>
          <Link to='/survey'>Contribute</Link>
        </Menu.Item>
      </Menu>
      {isReport && (
        <Button
          className='mobile-anchor-button'
          icon={<MenuOutlined />}
          onClick={handleOpenDrawer}
          type='default'
        />
      )}
    </Header>
  )
}
