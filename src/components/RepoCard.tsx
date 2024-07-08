import '@styles/RepoCard.styles.scss'
import { RoundedTag } from './RoundedTag'
import { Col, Row, Typography } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { GithubRepoContent } from '@types'
import { replaceShortcodeEmojis, transformRepoTopics } from '@utils'

const { Title, Text } = Typography

interface RepoCardProps {
  repo: GithubRepoContent
}
export const RepoCard = ({ repo }: RepoCardProps) => {
  const topics = transformRepoTopics(repo.topics, repo.language)

  return (
    <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='repo-card'>
      <div className='card-bg'>
        <Row justify='space-between' align='middle' className='card-row'>
          <Col span={3}>{repo.language && <RoundedTag tagName={repo.language} />}</Col>
          <Col span={6} className='stars'>
            <StarOutlined /> <span className='star-text'>{repo.stargazers_count}</span>
          </Col>
        </Row>

        <div className='card-content'>
          {repo.name && (
            <Title className='card-title' level={3}>
              {repo.name}
            </Title>
          )}

          {repo.description && (
            <Text className='card-description'>{replaceShortcodeEmojis(repo.description)}</Text>
          )}
        </div>

        <Row justify='start' className='card-row'>
          {topics.map((topic, index) => (
            <RoundedTag key={index} tagName={topic} />
          ))}
        </Row>
      </div>
    </a>
  )
}
