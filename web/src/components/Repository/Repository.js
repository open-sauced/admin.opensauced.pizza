import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/RepositoriesCell'

const DELETE_REPOSITORY_MUTATION = gql`
  mutation DeleteRepositoryMutation($id: Int!) {
    deleteRepository(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Repository = ({ repository }) => {
  const { addMessage } = useFlash()
  const [deleteRepository] = useMutation(DELETE_REPOSITORY_MUTATION, {
    onCompleted: () => {
      navigate(routes.repositories())
      addMessage('Repository deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete repository ' + id + '?')) {
      deleteRepository({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Repository {repository.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{repository.id}</td>
            </tr>
            <tr>
              <th>Github id</th>
              <td>{repository.githubId}</td>
            </tr>
            <tr>
              <th>Full name</th>
              <td>{repository.fullName}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(repository.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRepository({ id: repository.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(repository.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Repository
