import '@styles/RepoCard.scss'
import { RoundedTag } from './RoundedTag'
import { Col, Row, Typography } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import '@styles/RepoCard.scss'
import { GithubRepoContent } from '@types'

const { Title, Text } = Typography

interface RepoCardProp {
  repo: GithubRepoContent
}
export const RepoCard = ({ repo }: RepoCardProp) => {
  interface EmojiMap {
    [key: string]: string
  }
  const emojiMap: EmojiMap = {
    ':eyes:': '👀',
    ':pencil2:': '✏️',
  }

  const convertShortcodesToUnicode = (text: string) => {
    const regex = /(:\w+:)/g
    return text.replace(regex, (match) => emojiMap[match] || match)
  }

  return (
    <div className='card-bg'>
      <Row justify='space-between' align='middle' className='card-row'>
        <Col span={3}>
          <RoundedTag tagName={repo.language} />
        </Col>
        <Col span={6}>
          <StarOutlined /> {repo.stargazers_count}
        </Col>
      </Row>

      <div className='card-content'>
        <Title className='card-title' level={3}>
          {repo.name}
        </Title>
        <Text className='card-description'>
          {repo.description && convertShortcodesToUnicode(repo.description)}
        </Text>
      </div>

      {repo.topics.length === 0 && (
        <Row justify='start' className='card-row'>
          <RoundedTag tagName={repo.language} />
        </Row>
      )}

      {repo.topics.length > 0 && (
        <Row justify='start' className='card-row'>
          {repo.topics.slice(0, 10).map((topic, index) => (
            <RoundedTag key={index} tagName={topic} />
          ))}
        </Row>
      )}
    </div>
  )
}
