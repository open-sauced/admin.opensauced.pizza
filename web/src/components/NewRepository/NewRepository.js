import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RepositoryForm from 'src/components/RepositoryForm'

import { QUERY } from 'src/components/RepositoriesCell'

const CREATE_REPOSITORY_MUTATION = gql`
  mutation CreateRepositoryMutation($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      id
    }
  }
`

const NewRepository = () => {
  const { addMessage } = useFlash()
  const [createRepository, { loading, error }] = useMutation(
    CREATE_REPOSITORY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.repositories())
        addMessage('Repository created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      githubId: parseInt(input.githubId),
    })
    createRepository({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Repository</h2>
      </header>
      <div className="rw-segment-main">
        <RepositoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRepository
