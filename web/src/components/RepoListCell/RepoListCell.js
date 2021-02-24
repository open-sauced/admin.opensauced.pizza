export const QUERY = gql`
  query RepoListQuery {
    repositories {
      id
      fullName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ repositories }) => {
  return repositories.map((repository) => (
    <article key={repository.id}>
      <header>
        <div class="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
          {repository.fullName}
        </div>{' '}
      </header>
    </article>
  ))
}
