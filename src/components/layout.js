import * as React from "react"
import { Link } from 'gatsby'

import 'normalize.css'
import { container, header, navList, navItem, navLink } from '@/assets/scss/layout.module.scss'

const menuList = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/blog', name: 'blog' },
]

const Layout = ({pageTitle, children}) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <header className={header}>
        <nav>
          <ul className={navList}>
            {
              menuList.map(({ path, name }) =>
                <li className={navItem}>
                  <Link className={navLink} to={path}>{name}</Link>
                </li>
              )
            }
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