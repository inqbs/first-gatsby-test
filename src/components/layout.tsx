import * as React from "react"

import '@/assets/scss/custom.scss'
import Header from '@/components/header'

type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout