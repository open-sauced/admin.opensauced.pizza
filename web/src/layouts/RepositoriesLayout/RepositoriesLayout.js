import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const RepositoriesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.repositories()} className="rw-link">
            Repositories
          </Link>
        </h1>
        <Link to={routes.newRepository()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Repository
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default RepositoriesLayout
