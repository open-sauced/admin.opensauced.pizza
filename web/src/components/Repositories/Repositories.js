import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/RepositoriesCell'

const DELETE_REPOSITORY_MUTATION = gql`
  mutation DeleteRepositoryMutation($id: Int!) {
    deleteRepository(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const RepositoriesList = ({ repositories }) => {
  const { addMessage } = useFlash()
  const [deleteRepository] = useMutation(DELETE_REPOSITORY_MUTATION, {
    onCompleted: () => {
      addMessage('Repository deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete repository ' + id + '?')) {
      deleteRepository({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Github id</th>
            <th>Full name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repository) => (
            <tr key={repository.id}>
              <td>{truncate(repository.id)}</td>
              <td>{truncate(repository.githubId)}</td>
              <td>{truncate(repository.fullName)}</td>
              <td>{timeTag(repository.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.repository({ id: repository.id })}
                    title={'Show repository ' + repository.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRepository({ id: repository.id })}
                    title={'Edit repository ' + repository.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete repository ' + repository.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(repository.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RepositoriesList
