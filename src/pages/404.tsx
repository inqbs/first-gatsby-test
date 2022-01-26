import * as React from "react"
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import { Container } from "react-bootstrap"

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <Container>
        <h1>
          Page Not Found
        </h1>
        <Link to="/">Back to Index</Link>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
