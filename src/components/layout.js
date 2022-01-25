import * as React from "react"
import { Link } from 'gatsby'

import 'normalize.css'
import {container, header, navList, navItem, navLink} from '@/assets/scss/layout.module.scss'

const Layout = ({pageTitle, children}) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <header className={header}>
        <nav>
          <ul className={navList}>
            <li className={navItem}>
              <Link className={navLink} to="/">home</Link>
            </li>
            <li className={navItem}>
              <Link className={navLink} to="/about">about</Link>
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