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
    <article className="p-2" key={repository.id}>
      <header>
        <div className="flex-col max-w-xxl m-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img className="rounded" src="https://picsum.photos/536/354" /></div>
          <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
            {repository.fullName}
          </div>{' '}
          <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </div>
        </div>
      </header>
    </article>
  ))
}
