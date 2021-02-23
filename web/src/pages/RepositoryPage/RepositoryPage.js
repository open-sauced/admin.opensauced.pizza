import RepositoriesLayout from 'src/layouts/RepositoriesLayout'
import RepositoryCell from 'src/components/RepositoryCell'

const RepositoryPage = ({ id }) => {
  return (
    <RepositoriesLayout>
      <RepositoryCell id={id} />
    </RepositoriesLayout>
  )
}

export default RepositoryPage
