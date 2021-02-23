import { Link, routes } from '@redwoodjs/router'
import RepoListCell from 'src/components/RepoListCell'

const HomePage = () => {
  return (
    <>
      <h1>List of Repos in the DB</h1>
      <RepoListCell />
    </>
  )
}

export default HomePage
