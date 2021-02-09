export const QUERY = gql`
  query RepoListQuery {
    repositories {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ repositories }) => {
  return JSON.stringify(repositories)
}
