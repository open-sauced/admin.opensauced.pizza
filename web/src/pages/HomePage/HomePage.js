import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <form>
        <input style="leftPa" className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Repository Name" placeholder="open-sauced/flava-flav" />
      </form>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
