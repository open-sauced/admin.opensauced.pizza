import Repository from 'src/components/Repository'

export const QUERY = gql`
  query FIND_REPOSITORY_BY_ID($id: Int!) {
    repository: repository(id: $id) {
      id
      githubId
      fullName
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Repository not found</div>

export const Success = ({ repository }) => {
  return <Repository repository={repository} />
}
