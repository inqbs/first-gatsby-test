import * as React from "react"
import { Link } from 'gatsby'

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout