import * as React from "react"
import { Link } from 'gatsby'

import Layout from '@/components/layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <section>
        <Link to="/">Back to Index</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
