import { Link, routes } from '@redwoodjs/router'

import Repositories from 'src/components/Repositories'

export const QUERY = gql`
  query REPOSITORIES {
    repositories {
      id
      githubId
      fullName
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No repositories yet. '}
      <Link to={routes.newRepository()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ repositories }) => {
  return <Repositories repositories={repositories} />
}
