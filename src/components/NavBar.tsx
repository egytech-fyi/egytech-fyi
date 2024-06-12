import { DollarTwoTone, FundTwoTone, MenuOutlined, PlusCircleTwoTone } from '@ant-design/icons'
import '@styles/Navbar.styles.scss'
import { Button, Layout, Menu } from 'antd'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/symbol.svg'

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
          key='/contribute'
          icon={<PlusCircleTwoTone twoToneColor='#4c88ef' />}>
          <Link to='/contribute'>Contribute</Link>
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
