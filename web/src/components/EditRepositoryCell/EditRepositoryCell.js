import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RepositoryForm from 'src/components/RepositoryForm'

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
const UPDATE_REPOSITORY_MUTATION = gql`
  mutation UpdateRepositoryMutation($id: Int!, $input: UpdateRepositoryInput!) {
    updateRepository(id: $id, input: $input) {
      id
      githubId
      fullName
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ repository }) => {
  const { addMessage } = useFlash()
  const [updateRepository, { loading, error }] = useMutation(
    UPDATE_REPOSITORY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.repositories())
        addMessage('Repository updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      githubId: parseInt(input.githubId),
    })
    updateRepository({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Repository {repository.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RepositoryForm
          repository={repository}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
