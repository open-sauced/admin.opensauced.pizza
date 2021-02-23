// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/repositories/new" page={NewRepositoryPage} name="newRepository" />
      <Route path="/repositories/{id:Int}/edit" page={EditRepositoryPage} name="editRepository" />
      <Route path="/repositories/{id:Int}" page={RepositoryPage} name="repository" />
      <Route path="/repositories" page={RepositoriesPage} name="repositories" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
