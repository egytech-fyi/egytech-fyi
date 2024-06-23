import { Anchor, Col, Divider, Drawer, Row, Spin } from 'antd'
import { Overview, Satisfaction, Technology } from '@pages'
import '@styles/Insights.styles.scss'
import { useEffect, useState } from 'react'

interface AnchorItem {
  key: string
  href: string
  title: string
  children?: AnchorItem[]
}

interface InsightsProps {
  drawerOpen: boolean
  onDrawerClose: () => void
}

// Array of anchor items for reuse in both desktop and mobile layouts
const anchorItems: AnchorItem[] = [
  {
    key: 'overview',
    href: '#overview',
    title: 'Overview',
    children: [
      { key: 'gender', href: '#gender', title: 'Gender' },
      { key: 'title', href: '#title', title: 'Title' },
      { key: 'degree', href: '#degree', title: 'CS Degree' },
      { key: 'level', href: '#level', title: 'Level' },
      {
        key: 'work-setting',
        href: '#work-setting',
        title: 'Work Setting',
      },
      {
        key: 'company-size',
        href: '#company-size',
        title: 'Company Size',
      },
      {
        key: 'company-market',
        href: '#company-market',
        title: 'Company Market',
      },
      { key: 'location', href: '#location', title: 'Location' },
    ],
  },
  {
    key: 'trends',
    href: '#trends',
    title: 'Trends',
    children: [
      {
        key: 'technology',
        href: '#technology',
        title: 'Popular Technology',
      },
      {
        key: 'product-tools',
        href: '#product-tools',
        title: 'Product Tools',
      },
      {
        key: 'product-decision-making',
        href: '#product-decision-making',
        title: 'Products Pricing',
      },
      {
        key: 'product-data-analysis',
        href: '#product-data-analysis',
        title: 'Product Analysis Tools',
      },
    ],
  },
  {
    key: 'satisfaction',
    href: '#satisfaction',
    title: 'Satisfaction',
    children: [
      {
        key: 'salary-increase',
        href: '#salary-increase',
        title: 'Salary Increase',
      },
      {
        key: 'same-company',
        href: '#same-company',
        title: 'Same Company',
      },
      {
        key: 'salaries-rise-with-currencies',
        href: '#salaries-rise-with-currencies',
        title: 'Salaries Across the Years',
      },
      {
        key: 'salary-satisfaction',
        href: '#salary-satisfaction',
        title: 'Salary Satisfaction',
      },
      {
        key: 'level-satisfaction',
        href: '#level-satisfaction',
        title: 'Level Satisfaction',
      },
      { key: 'value', href: '#value', title: 'Value' },
      { key: 'learning', href: '#learning', title: 'Learning' },
      {
        key: 'preferred-work-setting',
        href: '#preferred-work-setting',
        title: 'Preferred Work Setting',
      },
    ],
  },
]

export const Insights = ({ drawerOpen, onDrawerClose }: InsightsProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return <Spin size='large' style={{ margin: 'auto' }} />

  return (
    <div className='insights-page'>
      <Row>
        <Col xs={24} md={16} lg={19}>
          <div>
            <div className='header-text'>
              <h1>Egyptian Tech Scene 2024</h1>
            </div>
            <Divider />
          </div>
          <Overview />
          <Technology />
          <Satisfaction />
        </Col>

        <Col xs={0} md={1} lg={1} />

        {/* Desktop Anchor */}
        <Col xs={0} md={7} lg={4} className='desktop-anchor'>
          <Anchor offsetTop={180} bounds={1} items={anchorItems} />
        </Col>

        {/* Mobile Drawer */}
        <Drawer
          title='Content'
          placement='right'
          onClose={onDrawerClose}
          open={drawerOpen}
          width={280}>
          <Anchor offsetTop={50} bounds={1} items={anchorItems} onClick={onDrawerClose} />
        </Drawer>
      </Row>
    </div>
  )
}
