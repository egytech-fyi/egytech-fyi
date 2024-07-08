import { Divider, Spin, Row, Col } from 'antd'
import '@styles/RepoCard.scss'
import { RepoCard } from '@components'
import { GithubRepoContent } from '@types'
import { useGetRepos } from '@services'

export const Repos = () => {
  const { isLoading, isError, data } = useGetRepos()

  if (isError) {
    return <div>Error fetching repositories.</div>
  }
  if (isLoading) return <Spin size='large' style={{ margin: 'auto' }} />

  return (
    <div style={{ width: '100%' }}>
      <div className='header-text'>
        <h1>Egyptian Top Open Source Repos</h1>
      </div>
      <Divider />
      <div className='row-container'>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center'>
          {data?.map((repo: GithubRepoContent) => (
            <Col key={repo.id} xs={24} sm={24} md={12} lg={12}>
              <RepoCard repo={repo} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
