import RepositoriesLayout from 'src/layouts/RepositoriesLayout'
import EditRepositoryCell from 'src/components/EditRepositoryCell'

const EditRepositoryPage = ({ id }) => {
  return (
    <RepositoriesLayout>
      <EditRepositoryCell id={id} />
    </RepositoriesLayout>
  )
}

export default EditRepositoryPage
